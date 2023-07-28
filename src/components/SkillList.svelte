<script lang="ts">
  import type { Profession } from "../game/professions";
  import type { Skill } from "../game/skills";
  import type { SkillsetEntry } from "../stores/builds";
  import { store_compact_icons } from "../stores/compact_icons";
  import { store_wiki_iframe } from "../stores/wiki-iframe";
  import SkillIcon from "./SkillIcon.svelte";

  export let skills: SkillsetEntry[] = [];
</script>

<div class="skill-list" class:compact={$store_compact_icons}>
  {#each skills as skill}
    <SkillIcon {skill} compact={$store_compact_icons} />
  {/each}
</div>

<style>
  .skill-list {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: flex-start;
  }
</style>
