import { all_axe_skills } from "./axe";
import { all_hammer_skills } from "./hammer";
import { all_sword_skills } from "./sword";

export type WarriorWeaponType = "hammer" | "sword" | "axe";

export const ALL_WARRIOR_WEAPON_TYPES: WarriorWeaponType[] = [
  "hammer",
  "sword",
  "axe",
];

export function getSkillWarriorWeaponType(
  normalized_name: string
): WarriorWeaponType | null {
  if (all_sword_skills.has(normalized_name)) {
    return "sword";
  } else if (all_hammer_skills.has(normalized_name)) {
    return "hammer";
  } else if (all_axe_skills.has(normalized_name)) {
    return "axe";
  }

  return null;
}
