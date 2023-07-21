import { all_air_skills } from "./air";
import { all_earth_skills } from "./earth";
import { all_fire_skills } from "./fire";
import { all_water_skills } from "./water";

export type ElementalistElement = "air" | "fire" | "water" | "earth";

export const ALL_ELEMENTALIST_ELEMENTS: ElementalistElement[] = [
  "air",
  "earth",
  "fire",
  "water",
];

export function getSkillElementalistElement(
  normalized_name: string
): ElementalistElement | null {
  if (all_air_skills.has(normalized_name)) {
    return "air";
  } else if (all_fire_skills.has(normalized_name)) {
    return "fire";
  } else if (all_earth_skills.has(normalized_name)) {
    return "earth";
  } else if (all_water_skills.has(normalized_name)) {
    return "water";
  }

  return null;
}
