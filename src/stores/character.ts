import { get, writable } from "svelte/store";
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

let old_primary: Profession = get(store_primary_profession);
store_primary_profession.subscribe((p) => {
  // verify if it's a swap from primary to secondary
  const secondary = get(store_secondary_profession);
  if (p === secondary) {
    store_secondary_profession.set(old_primary);
  }

  old_primary = p;

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
  let filtered_profession: SecondaryProfession[] = all_professions.filter(
    (p) => p !== profession
  );

  return filtered_profession.concat(["none"]);
}
