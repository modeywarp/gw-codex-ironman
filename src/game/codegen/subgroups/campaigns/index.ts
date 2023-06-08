import type { Campaign } from "../../../../stores/campaign";
import { core_skills } from "./core";
import { factions_skills } from "./factions";
import { nightfall_skills } from "./nightfall";
import { prophecy_skills } from "./prophecy";

export type SkillOrigin = Campaign | "Core";

export const ALL_SKILL_ORIGINS: SkillOrigin[] = [
  "Core",
  "Prophecy",
  "Faction",
  "Nightfall",
  "GWEN",
];

export function getSkillOrigin(skill: string): SkillOrigin {
  if (core_skills.has(skill)) {
    return "Core";
  } else if (prophecy_skills.has(skill)) {
    return "Prophecy";
  } else if (factions_skills.has(skill)) {
    return "Faction";
  } else if (nightfall_skills.has(skill)) {
    return "Nightfall";
  }

  return "GWEN";
}
