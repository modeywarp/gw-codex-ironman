import { toNormalized } from "../name-mappers";

export const all_offhand_attacks = new Set(
  [
    "Black Spider Strike",
    "Fox Fangs",
    "Golden Fang Strike",
    "Golden Phoenix Strike",
    "Golden Skull Strike",
    "Jungle Strike",
    "Lotus Strike",
    "Temple Strike",
    "Wild Strike",
    "Mantis Touch",
    "Palm Strike",
  ].map(toNormalized)
);
