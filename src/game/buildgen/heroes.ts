import { generateSkillset } from ".";
import type { SkillsetEntry } from "../../stores/builds";
import { ALL_SKILL_ORIGINS } from "../codegen/subgroups/campaigns";
import type { Outpost, Region } from "../outposts";
import type { Profession } from "../professions";

export type HeroBuild = SkillsetEntry[];

export type HeroBuilds = [HeroBuild, HeroBuild, HeroBuild, HeroBuild];

export function generateHeroBuilds(
  character_name: string,
  profession: Profession,
  region: Region
): HeroBuilds {
  return new Array(4)
    .fill([])
    .map((_, i) =>
      generateHeroBuild(i, character_name, profession, region.outposts[0])
    )
    .map((skillset) => Array.from(skillset) as HeroBuild) as HeroBuilds;
}

function generateHeroBuild(
  index: number,
  character_name,
  profession: Profession,
  outpost: Outpost
) {
  return generateSkillset(
    character_name + "--hero-" + index,
    outpost,
    profession,
    {
      is_hero_build: true,
      is_primary_profession: true,
      available_skill_origins: ALL_SKILL_ORIGINS.filter((p) => p !== "PVE"),
      henchmen_count: 0,
      players_count: 0,
      hardmode: false,
    }
  );
}
