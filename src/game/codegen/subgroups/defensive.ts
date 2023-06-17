import { toNormalized } from "../name-mappers";

// Any skill that does the following is a defensive skill:
// - heals
// - blocks
// - remove conditions
// - apply blind, weakness, or cripple
// - change damage type
// - reduce received damage or increase armor
// - reduce energy cost or recharge
// - increase movement speed
// - decreases target movement speed, or knocks down
// ... anything that can increase you chances of survival in a tough fight
//
// NOTE: a skill can be both defensive and offensive, it can also
// be defensive & supportive.

const ranger_defensive_skills = [
  "Antidote Signet",
  "Archer's Signet",
  "Call of Protection",
  "Charm Animal",
  "Comfort Animal",
  "Companionship",
  "Conflagration",
  "Dust Trap",
  "Energizing Wind",
  "Escape",
  "Fertile Season",
  "Greater Conflagration",
  "Healing Spring",
  "Lightning Reflexes",
  "Melandru's Resilience",
  "Muddy Terrain",
  "Natural Stride",
  "Nature's Renewal",
  "Never Rampage Alone",
  "Oath Shot",
  "Otyugh's Cry",
  "Pin Down",
  "Predatory Bond",
  "Quickening Zephyr",
  "Scavenger Strike",
  "Serpent's Quickness",
  "Snare",
  "Storm Chaser",
  "Storm's Embrace",
  "Symbiosis",
  "Symbiotic Bond",
  "Throw Dirt",
  "Trapper's Focus",
  "Trapper's Speed",
  "Troll Unguent",
  "Tripwire",
  "Whirling Defense",
  "Winter",
  "Zojun's Haste",
].map(toNormalized);

export const all_defensive_skills = new Set([].concat(ranger_defensive_skills));
