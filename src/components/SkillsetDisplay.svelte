<script lang="ts">
  import type { Profession } from "../game/professions";
  import type { Skill } from "../game/skills";
  import type { Skillset } from "../stores/builds";
  import SkillList from "./SkillList.svelte";

  export let profession: Profession = "warrior";
  export let skillset: Skillset = null;

  const is_heal = (s: Skill) => s.options.is_heal || s.options.is_self_heal;

  $: skills = Boolean(skillset) ? Array.from(skillset) : [];
  $: regular_skills = skills.filter((s) => !s.options.is_elite && !is_heal(s));
  $: heal_skills = skills.filter(is_heal).filter((s) => !s.options.is_elite);
  $: elite_skills = skills.filter((s) => s.options.is_elite);
</script>

<div class="skillset">
  <h2>{profession}</h2>
  <h3>Regular skills</h3>
  <SkillList skills={regular_skills} {profession} />

  <h3>Healing skills</h3>
  <SkillList skills={heal_skills} {profession} />

  {#if elite_skills.length}
    <h3>Elite skills</h3>
    <SkillList skills={elite_skills} {profession} />
  {/if}
</div>

<style>
  .skillset {
    padding: 1em;
  }

  h2 {
    text-transform: capitalize;
    font-size: 4em;
    margin: 0;
    padding: 0;
  }

  h3 {
    display: block;
    margin: 0;
    padding: 0;
    margin-top: 1em;
  }
</style>
