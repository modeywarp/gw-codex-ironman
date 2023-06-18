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

  const rng = new Rng(
    `${character_name.toLowerCase()}-${outpost.link}-${profession}`
  );
  const available_skills = skills
    .get(profession)
    .filter((skill) => available_skill_origins.has(skill.options.origin));

  const subsets = {
    regulars: available_skills.filter((s) => !s.options.is_elite),
    selfheals: available_skills.filter(
      (s) => !s.options.is_elite && s.options.is_self_heal
    ),
    elites: available_skills.filter((s) => s.options.is_elite),
  };

  const SKILLSET_NORMAL_SIZE = Math.min(20, subsets.regulars.length);
  let skillset: Set<Skill> = new Set();

  // 1.
  // start by adding one guaranted self-heal
  let shortcircuit = 100;
  if (subsets.selfheals.length > 0) {
    while (skillset.size < 1 && shortcircuit--) {
      const index = rng.nextRange(subsets.selfheals.length);

      skillset.add(subsets.selfheals.at(index));
    }
  }

  // 2.
  // add regular skills until it reaches SKILLSET_NORMAL_SIZE
  shortcircuit = 100;
  while (skillset.size < SKILLSET_NORMAL_SIZE && shortcircuit--) {
    const skill_index = rng.nextRange(subsets.regulars.length);
    const skill = subsets.regulars.at(skill_index);

    if (skillset.has(skill)) {
      continue;
    }

    skillset.add(skill);
  }

  // 3.
  // if primary profession, add a random amount of elites to the skillset
  if (options.is_primary_profession && subsets.elites.length > 0) {
    const elites_count = rng.nextRange(Math.min(subsets.elites.length, 6), 3);

    shortcircuit = 100;
    while (
      skillset.size < SKILLSET_NORMAL_SIZE + elites_count &&
      shortcircuit--
    ) {
      const skill_index = rng.nextRange(subsets.elites.length);
      const skill = subsets.elites.at(skill_index);

      if (skillset.has(skill)) {
        continue;
      }

      skillset.add(skill);
    }
  }

  // 4.
  // construct a list of disabled skills from the henchmen penalty
  const penalty = getSkillPenaltyFromHenchmen(
    options.henchmen_count,
    options.is_primary_profession
  );

  const skills_to_disable = Array.from(skillset);
  const disabled_skills = new Set();
  for (let i = 0; i < penalty; i += 1) {
    const skill_index = rng.nextRange(skills_to_disable.length);
    const [skill] = skills_to_disable.splice(skill_index, 1);

    disabled_skills.add(skill);
  }

  // 4.1
  // but ensure there is at least 1 available heal even after the penalty:
  const skills_array = Array.from(skillset);
  const enabled_skills = new Set(
    Array.from(skillset).filter((skill) => !disabled_skills.has(skill))
  );
  const skillset_heals = subsets.selfheals.filter((s) => skillset.has(s));
  const enabled_heals = new Set(
    subsets.selfheals.filter((s) => enabled_skills.has(s))
  );

  // 4.1.1
  // enable back a random heal:
  if (enabled_heals.size < 1) {
    const skill_index = rng.nextRange(skillset_heals.length);
    const skill = skillset_heals[skill_index];

    disabled_skills.delete(skill);
  }

  return new Set(
    skills_array.map((skill) => ({
      ...skill,
      disabled: disabled_skills.has(skill),
    }))
  );
}
