import { toNormalized } from "../name-mappers";

export const all_minions = new Set(
  [
    "Animate Bone Fiend",
    "Animate Bone Horror",
    "Animate Bone Minions",
    "Animate Flesh Golem",
    "Animate Shambling Horror",
    "Animate Vampiric Horror",
  ].map(toNormalized)
);
