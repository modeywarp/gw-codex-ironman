<script lang="ts">
  import { generateSkillset } from "../../game/buildgen";
  import { ALL_SKILL_ORIGINS } from "../../game/codegen/subgroups/campaigns";
  import { all_regions, type Outpost, type Region } from "../../game/outposts";
  import type { Profession } from "../../game/professions";
  import { store_character_name } from "../../stores/character";
  import { store_henchmen_count } from "../../stores/henchmen";
  import HeroSkillbar from "./HeroSkillbar.svelte";

  export let profession: Profession = "warrior";
  export let region: Region = all_regions[0];

  $: skillsets = new Array(4)
    .fill([])
    .map((_, i) => generateHeroBuild(i, profession, region.outposts[0]));

  $: builds = skillsets.map((skillset) => Array.from(skillset.values()));

  function generateHeroBuild(
    index: number,
    profession: Profession,
    outpost: Outpost
  ) {
    return generateSkillset(
      $store_character_name + "--hero-" + index,
      outpost,
      profession,
      {
        is_hero_build: true,
        is_primary_profession: true,
        available_skill_origins: ALL_SKILL_ORIGINS.filter((p) => p !== "PVE"),
        henchmen_count: $store_henchmen_count,
        players_count: 0,
        hardmode: false,
      }
    );
  }
</script>

<div class="builds-preview">
  <h2>{profession}</h2>

  {#each builds as build}
    <HeroSkillbar {profession} {build} />
  {/each}
</div>

<style>
  .builds-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    text-transform: capitalize;
  }
</style>
