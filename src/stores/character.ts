import { writable } from "svelte/store";
import {
  all_professions,
  type Profession,
  type SecondaryProfession,
} from "../game/professions";

export const store_character_name = writable("");
export const store_primary_profession = writable<Profession>("warrior");
export const store_secondary_profession = writable<SecondaryProfession>("none");
export const store_available_secondary_professions = writable<
  SecondaryProfession[]
>([]);

store_primary_profession.subscribe((p) => {
  store_available_secondary_professions.set(
    getAvailableSecondaryProfessions(p)
  );
});

function getAvailableSecondaryProfessions(
  profession: Profession
): SecondaryProfession[] {
  return all_professions.filter((p) => p !== profession);
}
