import { toNormalized } from "../../name-mappers";

export const all_hammer_skills = new Set(
  [
    "Auspicious Blow",
    "Backbreaker",
    "Belly Smash",
    "Counter Blow",
    "Crude Swing",
    "Crushing Blow",
    "Devastating Hammer",
    "Earth Shaker",
    "Enraged Smash",
    "Fierce Blow",
    "Forceful Blow",
    "Hammer Bash",
    "Heavy Blow",
    "Irresistible Blow",
    "Magehunter's Smash",
    "Mighty Blow",
    "Mokele Smash",
    "Overbearing Smash",
    "Pulverizing Smash",
    "Renewing Smash",
    "Staggering Blow",
    "Yeti Smash",
  ].map(toNormalized)
);
