import { canStore } from ".";
import type { Profession } from "../game/professions";

const KEY = "CHARACTER_PRIMARY_PROFESSION";

export function setCharacterPrimaryProfessionLs(profession: Profession) {
  return canStore() && localStorage.setItem(KEY, profession);
}

export function getCharacterPrimaryProfessionLs(): Profession {
  return (localStorage.getItem(KEY) as Profession) || "warrior";
}
