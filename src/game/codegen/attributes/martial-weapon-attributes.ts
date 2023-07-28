import type { Attribute } from ".";

const warrior_weapon_attributes: Attribute[] = [
  "axe-mastery",
  "swordsmanship",
  "hammer-mastery",
];

const ranger_weapon_attributes: Attribute[] = ["marksmanship", "beast-mastery"];

const assassin_weapon_attributes: Attribute[] = ["dagger-mastery"];

const dervish_weapon_attributes: Attribute[] = ["scythe-mastery"];

const paragon_weapon_attibutes: Attribute[] = ["spear-mastery"];

export const all_weapon_attributes: Set<Attribute> = new Set([
  ...warrior_weapon_attributes,
  ...ranger_weapon_attributes,
  ...assassin_weapon_attributes,
  ...dervish_weapon_attributes,
  ...paragon_weapon_attibutes,
]);
