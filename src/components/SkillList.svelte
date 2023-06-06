<script lang="ts">
  import type { Profession } from "../game/professions";
  import type { Skill } from "../game/skills";

  export let skills: Skill[] = [];
  export let profession: Profession = "warrior";
</script>

<div class="skill-list">
  {#each skills as skill}
    <a
      class="skill"
      href={`https://wiki.guildwars.com${skill.link}`}
      class:elite={skill.options.is_elite}
      class:selfheal={skill.options.is_self_heal}
    >
      <img src={`/skill-icons/${profession}/${skill.icon}`} alt="" />
      <span class="name">{skill.name}</span>
    </a>
  {/each}
</div>

<style>
  .skill-list {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: flex-start;
  }

  .skill {
    position: relative;
    display: inline-block;
    text-align: center;
    margin: 1em;
    border-radius: 12px;
    box-shadow: 0px 0px 6px 6px rgba(20, 20, 20, 0.6);
    background-color: black;
    outline: solid 6px black;
    color: white;
    z-index: 10;
  }

  .skill img {
    display: block;
    margin: auto;
    width: 64px;
  }

  .skill.elite {
    outline-color: goldenrod;
  }

  span {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    background-color: white;
    color: black;
    padding: 0.3em;
    min-height: 100%;
    box-shadow: 0 6px 6px rgba(20, 20, 20, 0.1);
    border-radius: 6px;
    border: solid 1px black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    animation-name: slide;
    animation-duration: 0.1s;
  }

  .skill:hover span {
    display: flex;
  }

  @keyframes slide {
    from {
      opacity: 0.6;
    }
    to {
      opacity: 1;
    }
  }
</style>
