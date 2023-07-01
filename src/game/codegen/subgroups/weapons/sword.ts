import { toNormalized } from "../../name-mappers";

export const all_sword_skills = new Set(
  [
    "Barbarous Slice",
    "Crippling Slash",
    "Dragon Slash",
    "Final Thrust",
    "Galrath Slash",
    "Gash",
    "Hamstring",
    "Hundred Blades",
    "Jaizhenju Strike",
    "Knee Cutter",
    "Pure Strike",
    "Quivering Blade",
    "Savage Slash",
    "Seeking Blade",
    "Sever Artery",
    "Silverwing Slash",
    "Standing Slash",
    "Steelfang Slash",
    "Sun and Moon Slash",
  ].map(toNormalized)
);
