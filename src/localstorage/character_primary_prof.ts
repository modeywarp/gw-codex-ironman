import { isInPreview } from ".";
import type { Profession } from "../game/professions";

const KEY = "CHARACTER_PRIMARY_PROFESSION";

export function setCharacterPrimaryProfessionLs(profession: Profession) {
  return isInPreview() && localStorage.setItem(KEY, profession);
}

export function getCharacterPrimaryProfessionLs(): Profession {
  return (localStorage.getItem(KEY) as Profession) || "warrior";
}
