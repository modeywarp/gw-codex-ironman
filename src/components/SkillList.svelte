<script lang="ts">
  import type { Profession } from "../game/professions";
  import type { Skill } from "../game/skills";
  import { store_wiki_iframe } from "../stores/wiki-iframe";

  export let skills: Skill[] = [];
  export let profession: Profession = "warrior";

  function setWikiIframe(e, skill: Skill) {
    e.preventDefault();
    e.target.scrollIntoView({ block: "start", behavior: "smooth" });

    store_wiki_iframe.set(skill.name);
  }

  // github pages aren't hosted on a domain's root, each repository is in a sub
  // folder, so this is a way to get icons to load once pushed to production.
  const image_root = import.meta.env.PROD ? import.meta.env.BASE_URL : "";
</script>

<div class="skill-list">
  {#each skills as skill}
    <a
      on:click={(e) => setWikiIframe(e, skill)}
      class="skill"
      href={`https://wiki.guildwars.com/?search=${skill.name}`}
      class:elite={skill.options.is_elite}
      class:selfheal={skill.options.is_self_heal}>
      <img
        src={`${image_root}/skill-icons/${profession}/${skill.icon}`}
        alt="" />
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
    color: white;
    padding: 0.3em;
    min-height: 100%;
    border-radius: 6px;
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

  .skill:hover img {
    opacity: 0.2;
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
