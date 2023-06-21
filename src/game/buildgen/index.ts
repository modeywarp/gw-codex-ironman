import type { Skillset, SkillsetEntry } from "../../stores/builds";
import type { SkillOrigin } from "../codegen/subgroups/campaigns";
import type { Outpost } from "../outposts";
import type { Profession } from "../professions";
import { Rng } from "../rng";
import skills, { type Skill } from "../skills";
import { cacheKey, getCachedBuild, setCachedBuild } from "./cache";
import { getSkillPenaltyFromHenchmen } from "./henchmen_restrictions";
import { getSkillPenaltyFromPlayersCount } from "./players_count_restrictions";

export interface BuildGenOptions {
  is_primary_profession: boolean;
  available_skill_origins: SkillOrigin[];
  henchmen_count: number;
  players_count: number;
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

  const cache_key = cacheKey(
    character_name,
    outpost,
    profession,
    options,
    available_skill_origins
  );

  const cached_build = getCachedBuild(cache_key);
  if (cached_build !== null) {
    return cached_build;
  }

  return new BuildGenerator(
    character_name,
    outpost,
    profession,
    options,
    available_skill_origins
  )
    .withSelfHeals(1)
    .withDefensiveSkills(options.is_primary_profession)
    .withOffensiveSkills(options.is_primary_profession)
    .withInheritedSkills(profession)
    .withRegularSkills(17)
    .withElites(options.is_primary_profession) // the count is calculated inside the generator
    .withDisabledSkills(
      getSkillPenaltyFromHenchmen(
        options.henchmen_count,
        options.is_primary_profession
      )
    )
    .withDisabledSkills(
      getSkillPenaltyFromPlayersCount(
        options.players_count,
        options.is_primary_profession
      )
    )
    .build(cache_key);
}

class BuildGenerator {
  private rng: Rng;

  /**
   * unlike the regular `this.rng`, this one is seeded using the character name
   * and the outpost but NOT the profession. So it can be used in special cases
   * where a profession doesn't change the outcome of the RNG.
   */
  private rng_profession_independent: Rng;

  private available_skills: Skill[];
  private subsets: {
    regulars: Skill[];
    selfheals: Skill[];
    elites: Skill[];
    defensives: Skill[];
    offensives: Skill[];
  };

  private skillset: Set<Skill> = new Set();
  private disabled_skills: Set<Skill> = new Set();

  private inherited_skills_count: number = 0;

  constructor(
    character_name: string,
    outpost: Outpost,
    profession: Profession,
    options: BuildGenOptions,
    available_skill_origins: Set<SkillOrigin>
  ) {
    this.available_skills = skills
      .get(profession)
      .filter((skill) => available_skill_origins.has(skill.options.origin));

    this.rng = new Rng(
      `${character_name.toLowerCase()}-${outpost.link}-${profession}`
    );
    this.rng_profession_independent = new Rng(
      `${character_name.toLowerCase()}-${outpost.link}`
    );

    this.subsets = {
      regulars: this.available_skills.filter((s) => !s.options.is_elite),
      selfheals: this.available_skills.filter(
        (s) => !s.options.is_elite && s.options.is_self_heal
      ),
      defensives: this.available_skills.filter(
        (s) => s.options.is_defensive && !s.options.is_elite
      ),
      offensives: this.available_skills.filter(
        (s) => s.options.is_offensive && !s.options.is_elite
      ),
      elites: this.available_skills.filter((s) => s.options.is_elite),
    };
  }

  public withSelfHeals(count: number): BuildGenerator {
    if (this.subsets.selfheals.length <= 0) {
      return this;
    }

    return this.addSubsetSkillsToSkillset(this.subsets.selfheals, count);
  }

  public withRegularSkills(count: number): BuildGenerator {
    return this.addSubsetSkillsToSkillset(
      this.subsets.regulars,
      Math.max(count - this.inherited_skills_count, 0)
    );
  }

  public withElites(is_primary_profession: boolean): BuildGenerator {
    if (this.subsets.elites.length <= 0 || !is_primary_profession) {
      return this;
    }

    const count = this.rng.nextRange(6, 3);

    return this.addSubsetSkillsToSkillset(this.subsets.elites, count);
  }

  /**
   * Potentially add guaranted defensive skills to the build.
   *
   * A build is not guaranted to get defensive skills depending on whether it is
   * from a primary or secondary profession.
   */
  public withDefensiveSkills(is_primary_profession: boolean): BuildGenerator {
    const primary_has_defensive =
      this.rng_profession_independent.nextRange(10) < 5;

    // the guaranted defensive skills are randomly set to either the primary or
    // the secondary profession.
    if (
      (primary_has_defensive && !is_primary_profession) ||
      (!primary_has_defensive && is_primary_profession)
    ) {
      return this;
    }

    return this.addSubsetSkillsToSkillset(this.subsets.defensives, 2);
  }

  public withOffensiveSkills(is_primary_profession: boolean): BuildGenerator {
    const primary_has_offensive =
      this.rng_profession_independent.nextRange(10) < 5;

    // the guaranted defensive skills are randomly set to either the primary or
    // the secondary profession.
    if (
      (primary_has_offensive && !is_primary_profession) ||
      (!primary_has_offensive && is_primary_profession)
    ) {
      return this;
    }

    return this.addSubsetSkillsToSkillset(this.subsets.offensives, 2);
  }

  /**
   * Certain professions inherit guaranted skills in order to unlock the usage of
   * other skills. For example:
   * - necromancers inherit one summon
   * - ritualists inherit one binding ritual
   * - rangers get Charm Animal
   * - assassins get a lead & an off-hand attack
   */
  public withInheritedSkills(profession: Profession): BuildGenerator {
    if (profession === "assassin") {
      this.addSubsetSkillsToSkillset(
        this.subsets.regulars.filter((s) => s.options.is_lead_attack),
        1
      );
      this.addSubsetSkillsToSkillset(
        this.subsets.regulars.filter((s) => s.options.is_offhand_attack),
        1
      );

      this.inherited_skills_count = 2;
    } else if (profession === "ritualist") {
      this.addSubsetSkillsToSkillset(
        this.subsets.regulars.filter((s) => s.options.is_binding_ritual),
        1
      );

      this.inherited_skills_count = 1;
    } else if (profession === "necromancer") {
      this.addSubsetSkillsToSkillset(
        this.subsets.regulars.filter((s) => s.options.is_minion),
        1
      );

      this.inherited_skills_count = 1;
    } else if (profession === "ranger") {
      this.addSubsetSkillsToSkillset(
        this.subsets.regulars.filter((s) => s.options.is_pet_summon),
        1
      );

      this.inherited_skills_count = 1;
    } else if (profession === "monk") {
      this.addSubsetSkillsToSkillset(
        this.subsets.regulars.filter((s) => s.options.is_resurrection),
        1
      );

      this.inherited_skills_count = 1;
    }

    return this;
  }

  public withDisabledSkills(penalty: number): BuildGenerator {
    const skills_to_disable = Array.from(this.skillset);

    console.log({ penalty })

    const hasAnySelfHealLeft = () => skills_to_disable.some(s => s.options.is_self_heal);
    const hasAnyEliteLeft = () => skills_to_disable.some(s => s.options.is_elite);

    for (let i = 0; i < penalty; i += 1) {
      const skill_index = this.rng.nextRange(skills_to_disable.length);

      // important detail here, the `skills_disable` is mutated with splice
      // and the skill we get here is extracted out of the array.
      const [skill] = skills_to_disable.splice(skill_index, 1);

      // but it's possible we don't even add this skill to the list of disabled
      // skills yet we leave it out of the array to ensure it won't be selected
      // again in future iterations.
      const can_remove = hasAnySelfHealLeft() && hasAnyEliteLeft();
      if (can_remove) {
        this.disabled_skills.add(skill);
      }
    }

    return this;
  }

  public build(cache_key: string): Skillset {
    const skills_array = Array.from(this.skillset);

    const skillset = new Set(
      skills_array.map((skill) => ({
        ...skill,
        disabled: this.disabled_skills.has(skill),
      }))
    );

    setCachedBuild(cache_key, skillset);

    return skillset;
  }

  private addSubsetSkillsToSkillset(
    subset: Skill[],
    count: number
  ): BuildGenerator {
    const clamped_count = Math.min(subset.length, count);
    const target_size = this.skillset.size + clamped_count;
    let shortcircuit = 100;

    while (this.skillset.size < target_size && shortcircuit--) {
      const skill_index = this.rng.nextRange(subset.length);
      const skill = subset.at(skill_index);

      if (this.skillset.has(skill)) {
        continue;
      }

      this.skillset.add(skill);
    }

    return this;
  }
}
