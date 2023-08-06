<script lang="ts">
  import { generateSkillset } from "../../game/buildgen";
  import { generateHeroBuilds } from "../../game/buildgen/heroes";
  import { ALL_SKILL_ORIGINS } from "../../game/codegen/subgroups/campaigns";
  import { all_regions, type Outpost, type Region } from "../../game/outposts";
  import type { Profession } from "../../game/professions";
  import { store_character_name } from "../../stores/character";
  import { store_henchmen_count } from "../../stores/henchmen";
  import HeroSkillbar from "./HeroSkillbar.svelte";

  export let profession: Profession = "warrior";
  export let region: Region = all_regions[0];

  $: builds = generateHeroBuilds($store_character_name, profession, region);
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
