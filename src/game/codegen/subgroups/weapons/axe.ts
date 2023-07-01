import { toNormalized } from "../../name-mappers";

export const all_axe_skills = new Set(
  [
    "Agonizing Chop",
    "Axe Rake",
    "Axe Twist",
    "Cleave",
    "Critical Chop",
    "Cyclone Axe",
    "Decapitate",
    "Dismember",
    "Disrupting Chop",
    "Eviscerate",
    "Executioner's Strike",
    "Furious Axe",
    "Keen Chop",
    "Lacerating Chop",
    "Penetrating Blow",
    "Penetrating Chop",
    "Penetrating Chop",
    "Swift Chop",
    "Triple Chop",
    "Whirling Axe",
  ].map(toNormalized)
);
