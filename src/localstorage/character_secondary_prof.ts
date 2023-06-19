import { isInPreview } from ".";
import type { SecondaryProfession } from "../game/professions";

const KEY = "CHARACTER_SECONDARY_PROFESSION";

export function setCharacterSecondaryProfessionLs(
  profession: SecondaryProfession
) {
  return isInPreview() && localStorage.setItem(KEY, profession);
}

export function getCharacterSecondaryProfessionLs(): SecondaryProfession {
  return (localStorage.getItem(KEY) as SecondaryProfession) || "none";
}
