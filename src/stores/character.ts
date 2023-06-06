import { writable } from "svelte/store";
import {
  all_professions,
  type Profession,
  type SecondaryProfession,
} from "../game/professions";
import {
  getCharacterNameLs,
  setCharacterNameLs,
} from "../localstorage/character_name";
import {
  getCharacterPrimaryProfessionLs,
  setCharacterPrimaryProfessionLs,
} from "../localstorage/character_primary_prof";
import {
  getCharacterSecondaryProfessionLs,
  setCharacterSecondaryProfessionLs,
} from "../localstorage/character_secondary_prof";

export const store_character_name = writable(getCharacterNameLs());
export const store_primary_profession = writable<Profession>(
  getCharacterPrimaryProfessionLs()
);
export const store_secondary_profession = writable<SecondaryProfession>(
  getCharacterSecondaryProfessionLs()
);
export const store_available_secondary_professions = writable<
  SecondaryProfession[]
>([]);

store_primary_profession.subscribe((p) => {
  store_available_secondary_professions.set(
    getAvailableSecondaryProfessions(p)
  );
});

store_character_name.subscribe(setCharacterNameLs);
store_primary_profession.subscribe(setCharacterPrimaryProfessionLs);
store_secondary_profession.subscribe(setCharacterSecondaryProfessionLs);

function getAvailableSecondaryProfessions(
  profession: Profession
): SecondaryProfession[] {
  return all_professions.filter((p) => p !== profession);
}
