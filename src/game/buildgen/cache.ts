import type { BuildGenOptions } from ".";
import type { Skillset } from "../../stores/builds";
import type { SkillOrigin } from "../codegen/subgroups/campaigns";
import type { Outpost } from "../outposts";
import type { Profession } from "../professions";

const cache = new Map<string, Skillset>();

export function cacheKey(
  character_name: string,
  outpost: Outpost,
  profession: Profession,
  options: BuildGenOptions,
  available_skill_origins: Set<SkillOrigin>
): string {
  return JSON.stringify({
    character_name,
    outpost,
    profession,
    options,
    available_skill_origins,
  });
}

export function getCachedBuild(cache_key: string): Skillset | null {
  if (cache.has(cache_key)) {
    return cache.get(cache_key);
  }

  return null;
}

export function setCachedBuild(cache_key: string, skillset: Skillset) {
  cache.set(cache_key, skillset);
}
