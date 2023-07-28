import type { Profession } from "../../professions";

type AttributeWarrior =
  | "strength"
  | "swordsmanship"
  | "axe-mastery"
  | "hammer-mastery"
  | "tactics";
type AttributeMonk =
  | "divine-favor"
  | "healing-prayers"
  | "smiting-prayers"
  | "protection-prayers";
type AttributeRanger =
  | "expertise"
  | "wilderness-survival"
  | "marksmanship"
  | "beast-mastery";
type AttributeMesmer =
  | "fast-casting"
  | "illusion-magic"
  | "domination-magic"
  | "inspiration-magic";
type AttributeNecromancer =
  | "soul-reaping"
  | "death-magic"
  | "blood-magic"
  | "curses";
type AttributeElementalist =
  | "energy-storage"
  | "fire-magic"
  | "air-magic"
  | "water-magic"
  | "earth-magic";
type AttributeAssassin =
  | "critical-strikes"
  | "dagger-mastery"
  | "deadly-arts"
  | "shadow-arts";
type AttributeRitualist =
  | "spawning-power"
  | "channeling-power"
  | "restoration-magic"
  | "communing";
type AttributeParagon =
  | "leadership"
  | "motivation"
  | "command"
  | "spear-mastery";
type AttributeDervish =
  | "mysticism"
  | "wind-prayers"
  | "earth-prayers"
  | "scythe-mastery";

export type Attribute =
  | AttributeWarrior
  | AttributeMonk
  | AttributeRanger
  | AttributeMesmer
  | AttributeElementalist
  | AttributeNecromancer
  | AttributeAssassin
  | AttributeRitualist
  | AttributeParagon
  | AttributeDervish;

export const attributes_by_profession: Map<Profession, Attribute[]> = new Map([
  [
    "warrior",
    ["strength", "swordsmanship", "axe-mastery", "hammer-mastery", "tactics"],
  ],

  [
    "monk",
    [
      "divine-favor",
      "healing-prayers",
      "smiting-prayers",
      "protection-prayers",
    ],
  ],
  [
    "ranger",
    ["expertise", "wilderness-survival", "marksmanship", "beast-mastery"],
  ],
  [
    "mesmer",
    ["fast-casting", "illusion-magic", "domination-magic", "inspiration-magic"],
  ],
  ["necromancer", ["soul-reaping", "death-magic", "blood-magic", "curses"]],
  [
    "elementalist",
    ["energy-storage", "fire-magic", "air-magic", "water-magic"],
  ],
  [
    "assassin",
    ["critical-strikes", "dagger-mastery", "deadly-arts", "shadow-arts"],
  ],
  [
    "ritualist",
    ["spawning-power", "channeling-power", "restoration-magic", "communing"],
  ],
  ["paragon", ["leadership", "motivation", "command", "spear-mastery"]],
  ["dervish", ["mysticism", "wind-prayers", "earth-prayers", "scythe-mastery"]],
]);

export function formatAttributeName(attr: string): Attribute {
  return attr.toLocaleLowerCase().replaceAll(" ", "-") as Attribute;
}
