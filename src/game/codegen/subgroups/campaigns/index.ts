import type { Campaign } from "../../../../stores/campaign";
import { core_skills } from "./core";
import { factions_skills } from "./factions";
import { nightfall_skills } from "./nightfall";
import { prophecy_skills } from "./prophecy";
import { all_pve_skills } from "./pve";

export type SkillOrigin = Campaign | "Core" | "PVE";

export const ALL_SKILL_ORIGINS: SkillOrigin[] = [
  "Core",
  "PVE",
  "Prophecy",
  "Faction",
  "Nightfall",
  "GWEN",
];

export function getSkillOrigin(skill: string): SkillOrigin {
  // the fact PVE is before everything else is important here, as some PVE skills
  // are technically from the CORE, or FACTION, or NIGHTFALL packs
  if (all_pve_skills.has(skill)) {
    return "PVE";
  }
  else if (core_skills.has(skill)) {
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
