import { toNormalized } from "../name-mappers";

export const all_offhand_attacks = new Set(
  [
    "Black Spider Strike",
    "Falling Lotus Strike",
    "Falling Spider",
    "Fox Fangs",
    "Golden Fang Strike",
    "Golden Phoenix Strike",
    "Golden Skull Strike",
    "Jungle Strike",
    "Lotus Strike",
    "Moebius Strike",
    "Repeating Strike",
    "Temple Strike",
    "Wild Strike",
    "Withering Blade",
    "Mantis Touch",
    "Palm Strike",
  ].map(toNormalized)
);
