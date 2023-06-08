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

{#if skills.length > 0}
  <div class="skillset">
    <h2>{profession}</h2>
    <span class="skilllist">
      <h3>Regular skills</h3>
      <SkillList skills={regular_skills} {profession} />
    </span>

    {#if heal_skills.length}
      <span class="skilllist">
        <h3>Healing skills</h3>
        <SkillList skills={heal_skills} {profession} />
      </span>
    {/if}

    {#if elite_skills.length}
      <span class="skilllist">
        <h3>Elite skills</h3>
        <SkillList skills={elite_skills} {profession} />
      </span>
    {/if}
  </div>
{/if}

<style>
  .skillset {
    padding: 1em;
  }

  span.skilllist {
    animation-name: appear;
    animation-duration: 0.3s;
  }

  span.skilllist:nth-of-type(2) {
    animation-duration: 0.6s;
  }

  span.skilllist:nth-of-type(3) {
    animation-duration: 0.9s;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }

    75% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  h2 {
    text-transform: capitalize;
    font-size: 3em;
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
