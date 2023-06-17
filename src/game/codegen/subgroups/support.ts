import { toNormalized } from "../name-mappers";

// A support skill is:
// - anything that enhances the capabilities of ANOTHER player, be it defensively
//   or offensively.
//
// Example, the following are supportive actions. Any skill doing them is a
// supportive skill:
// - Applying weakness, as it decreases the damage taken by allies
// - Applying cracked armor, as it increases the damage dealt by allies
// - Increasing an ally's damage on its next attack
// - Ranger spirits
// - Any enchantment on another player
// - Any shout on another player (including shouts for pets)
// - ...

const ranger_support_skills = [
  "Call of Haste",
  "Call of Protection",
  "Conflagration",
  "Edge of Extinction",
  "Energizing Wind",
  "Equinox",
  "Famine",
  "Fertile Season",
  "Frozen Soil",
  "Greater Conflagration",
  "Infuriating Heat",
  "Lacerate",
  "Muddy Terrain",
  "Nature's Renewal",
  "Pestilence",
  "Predatory Season",
  "Quickening Zephyr",
  "Roaring Winds",
  "Symbiosis",
  "Toxicity",
  "Tranquility",
  "Winnowing",
  "Winter",
  "Heal as One",
  "Revive Animal",
  "Predatory Bond",
  "Piercing Trap",
  "Otyugh's Cry",
  "Never Rampage Alone",
].map(toNormalized);

export const all_support_skills = new Set([].concat(ranger_support_skills));
