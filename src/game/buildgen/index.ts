import type { Skillset } from "../../stores/builds";
import type { SkillOrigin } from "../codegen/subgroups/campaigns";
import type { Outpost } from "../outposts";
import type { Profession } from "../professions";
import { BuildGenerator } from "./build_generator";

import { cacheKey, getCachedBuild } from "./cache";
import { getSkillPenaltyFromHenchmen } from "./henchmen_restrictions";
import { getSkillPenaltyFromPlayersCount } from "./players_count_restrictions";

export interface BuildGenOptions {
  is_primary_profession: boolean;
  available_skill_origins: SkillOrigin[];
  henchmen_count: number;
  players_count: number;
  hardmode: boolean;
}

export function generateSkillset(
  character_name: string,
  outpost: Outpost,
  profession: Profession,
  options: BuildGenOptions
): Skillset {
  if (!character_name || !outpost || !profession) {
    return new Set();
  }

  const available_skill_origins = new Set(
    options.available_skill_origins || []
  );

  if (
    (profession === "dervish" || profession === "paragon") &&
    !available_skill_origins.has("Nightfall") &&
    !available_skill_origins.has("GWEN")
  ) {
    return new Set();
  }

  if (
    (profession === "assassin" || profession === "ritualist") &&
    !available_skill_origins.has("Faction") &&
    !available_skill_origins.has("Nightfall") &&
    !available_skill_origins.has("GWEN")
  ) {
    return new Set();
  }

  const cache_key = cacheKey(
    character_name,
    outpost,
    profession,
    options,
    available_skill_origins
  );

  const cached_build = getCachedBuild(cache_key);
  if (cached_build !== null) {
    return cached_build;
  }

  const { hardmode } = options;
  const normalmode = !hardmode;

  return new BuildGenerator(
    character_name,
    outpost,
    profession,
    options,
    available_skill_origins
  )
    .withSelfHeals(normalmode ? 1 : 2)
    .withDefensiveSkills(options.is_primary_profession, hardmode)
    .withOffensiveSkills(options.is_primary_profession)
    .withRegularSkills(normalmode ? 17 : 26)
    .withElites(options.is_primary_profession || hardmode) // the count is calculated inside the generator
    .withDisabledSkills(
      getSkillPenaltyFromHenchmen(
        options.henchmen_count,
        options.is_primary_profession
      ) +
        getSkillPenaltyFromPlayersCount(
          options.players_count,
          options.is_primary_profession
        )
    )
    .withInheritedSkills(profession)
    .withProfessionPveSkills(hardmode ? 2 : 1)
    .withGlobalPveSkills(hardmode && options.is_primary_profession ? 5 : 1)
    .build(cache_key);
}
