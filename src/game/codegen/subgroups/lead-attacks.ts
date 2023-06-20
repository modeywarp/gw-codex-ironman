import { toNormalized } from "../name-mappers";

export const all_lead_attacks = new Set(
  [
    "Black Lotus Strike",
    "Black Mantis Thrust",
    "Desperate Strike",
    "Disrupting Stab",
    "Golden Fox Strike",
    "Golden Lotus Strike",
    "Jagged Strike",
    "Leaping Mantis Sting",
    "Unsuspecting Strike",
    "Dancing Daggers",
    "Iron Palm",
    "Shadow Theft",
    "Sneak Attack",
  ].map(toNormalized)
);
