import type { Skillset, SkillsetEntry } from "../../stores/builds";
import type { SkillOrigin } from "../codegen/subgroups/campaigns";
import type { Outpost } from "../outposts";
import type { Profession } from "../professions";
import { Rng } from "../rng";
import skills, { type Skill } from "../skills";
import { getSkillPenaltyFromHenchmen } from "./henchmen_restrictions";

export interface BuildGenOptions {
  is_primary_profession: boolean;
  available_skill_origins: SkillOrigin[];
  henchmen_count: number;
}

export function generateSkillset(
  character_name: string,
  outpost: Outpost,
  profession: Profession,
  options: BuildGenOptions
): Skillset {
  if (!character_name || !outpost || !profession) {
    return new Set();
  }

  const available_skill_origins = new Set(
    options.available_skill_origins || []
  );

  if (
    (profession === "dervish" || profession === "paragon") &&
    !available_skill_origins.has("Nightfall") &&
    !available_skill_origins.has("GWEN")
  ) {
    return new Set();
  }

  if (
    (profession === "assassin" || profession === "ritualist") &&
    !available_skill_origins.has("Faction") &&
    !available_skill_origins.has("Nightfall") &&
    !available_skill_origins.has("GWEN")
  ) {
    return new Set();
  }

  return new BuildGenerator(
    character_name,
    outpost,
    profession,
    options,
    available_skill_origins
  )
    .withSelfHeals(1)
    .withRegularSkills(19)
    .withElites() // the count is calculated inside the generator
    .withDisabledSkills(
      getSkillPenaltyFromHenchmen(
        options.henchmen_count,
        options.is_primary_profession
      )
    )
    .build();
}

class BuildGenerator {
  private rng: Rng;

  private available_skills: Skill[];
  private subsets: {
    regulars: Skill[];
    selfheals: Skill[];
    elites: Skill[];
  };

  private skillset: Set<Skill> = new Set();
  private disabled_skills: Set<Skill> = new Set();
  constructor(
    character_name: string,
    outpost: Outpost,
    profession: Profession,
    options: BuildGenOptions,
    available_skill_origins: Set<SkillOrigin>
  ) {
    this.rng = new Rng(
      `${character_name.toLowerCase()}-${outpost.link}-${profession}`
    );

    this.available_skills = skills
      .get(profession)
      .filter((skill) => available_skill_origins.has(skill.options.origin));

    this.subsets = {
      regulars: this.available_skills.filter((s) => !s.options.is_elite),
      selfheals: this.available_skills.filter(
        (s) => !s.options.is_elite && s.options.is_self_heal
      ),
      elites: this.available_skills.filter((s) => s.options.is_elite),
    };
  }

  public withSelfHeals(count: number): BuildGenerator {
    if (this.subsets.selfheals.length > 0) {
      let target_size = this.skillset.size + count;
      let shortcircuit = 100;

      while (this.skillset.size < target_size && shortcircuit--) {
        const index = this.rng.nextRange(this.subsets.selfheals.length);

        this.skillset.add(this.subsets.selfheals.at(index));
      }
    }

    return this;
  }

  public withRegularSkills(count: number): BuildGenerator {
    let target_size = Math.min(
      this.skillset.size + count,
      this.subsets.regulars.length
    );
    let shortcircuit = 100;

    while (this.skillset.size < target_size && shortcircuit--) {
      const skill_index = this.rng.nextRange(this.subsets.regulars.length);
      const skill = this.subsets.regulars.at(skill_index);

      if (this.skillset.has(skill)) {
        continue;
      }

      this.skillset.add(skill);
    }

    return this;
  }

  public withElites(): BuildGenerator {
    if (this.subsets.elites.length <= 0) {
      return this;
    }

    const count = this.rng.nextRange(6, 3);
    const elites_count = Math.min(this.subsets.elites.length, count);
    const target_size = this.skillset.size + elites_count;
    let shortcircuit = 100;

    while (this.skillset.size < target_size && shortcircuit--) {
      const skill_index = this.rng.nextRange(this.subsets.elites.length);
      const skill = this.subsets.elites.at(skill_index);

      if (this.skillset.has(skill)) {
        continue;
      }

      this.skillset.add(skill);
    }

    return this;
  }

  public withDisabledSkills(penalty: number): BuildGenerator {
    const skills_to_disable = Array.from(this.skillset);

    for (let i = 0; i < penalty; i += 1) {
      const skill_index = this.rng.nextRange(skills_to_disable.length);
      const [skill] = skills_to_disable.splice(skill_index, 1);

      this.disabled_skills.add(skill);
    }

    // but ensure there is at least 1 available heal even after the penalty:
    const enabled_skills = new Set(
      Array.from(this.skillset).filter(
        (skill) => !this.disabled_skills.has(skill)
      )
    );
    const skillset_heals = this.subsets.selfheals.filter((s) =>
      this.skillset.has(s)
    );
    const enabled_heals = new Set(
      this.subsets.selfheals.filter((s) => enabled_skills.has(s))
    );

    // enable back a random heal:
    if (enabled_heals.size < 1) {
      const skill_index = this.rng.nextRange(skillset_heals.length);
      const skill = skillset_heals[skill_index];

      this.disabled_skills.delete(skill);
    }

    return this;
  }

  public build() {
    const skills_array = Array.from(this.skillset);

    return new Set(
      skills_array.map((skill) => ({
        ...skill,
        disabled: this.disabled_skills.has(skill),
      }))
    );
  }
}
