import { get, writable } from "svelte/store";
import type { Profession } from "../game/professions";
import { type Skill } from "../game/skills";
import { store_selected_outpost } from "./outposts";
import {
  store_character_name,
  store_primary_profession,
  store_secondary_profession,
} from "./character";
import { generateSkillset } from "../game/buildgen";
import { store_selected_skillpacks } from "./skillpacks";
import { store_henchmen_count } from "./henchmen";
import { store_players_count } from "./players_count";
import { store_hardmode } from "./hardmode";

export type SkillsetEntry = Skill & { disabled: boolean };
export type Skillset = Set<SkillsetEntry>;

export type BuildsStore = Map<Profession, Skillset>;

const store_builds = writable<BuildsStore>(null);
export default store_builds;

export function refreshBuildsStore() {
  const skillset: BuildsStore = new Map();

  skillset.set(
    get(store_primary_profession),
    generateSkillset(
      get(store_character_name),
      get(store_selected_outpost),
      get(store_primary_profession),
      {
        is_primary_profession: true,
        available_skill_origins: get(store_selected_skillpacks),
        henchmen_count: get(store_henchmen_count),
        players_count: get(store_players_count),
        hardmode: get(store_hardmode),
      }
    )
  );

  const secondary = get(store_secondary_profession);
  if (secondary !== "none") {
    skillset.set(
      secondary,
      generateSkillset(
        get(store_character_name),
        get(store_selected_outpost),
        secondary,
        {
          is_primary_profession: false,
          available_skill_origins: get(store_selected_skillpacks),
          henchmen_count: get(store_henchmen_count),
          players_count: get(store_players_count),
          hardmode: get(store_hardmode),
        }
      )
    );
  }

  store_builds.set(skillset);
}
