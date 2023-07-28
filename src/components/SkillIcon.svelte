<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import type { Profession } from "../game/professions";
  import type { SkillsetEntry } from "../stores/builds";
  import { store_wiki_iframe } from "../stores/wiki-iframe";

  export let skill: SkillsetEntry;
  export let compact = false;

  $: profession = skill.options.profession;

  const dispatch = createEventDispatcher();
  // github pages aren't hosted on a domain's root, each repository is in a sub
  // folder, so this is a way to get icons to load once pushed to production.
  const image_root = import.meta.env.PROD ? import.meta.env.BASE_URL : "";

  // the global pve skills are not tied to a profession, their path points to a
  // special directory
  $: src = skill.options.is_global_pve_skill
    ? `${image_root}/skill-icons/global-pve/${skill.icon}`
    : `${image_root}/skill-icons/${profession}/${skill.icon}`;

  function setWikiIframe(e, skill: SkillsetEntry) {
    e.preventDefault();
    e.target.scrollIntoView({ block: "start", behavior: "smooth" });

    store_wiki_iframe.set(skill.name);
  }

  function onDragStart(e) {
    const img = new Image();
    img.src = src;

    const drag_data = { skill, profession };
    e.dataTransfer.setData("text/plain", JSON.stringify(drag_data));
    e.dataTransfer.setDragImage(img, 48, 48);

    dispatch("drag-start", drag_data);
  }

  function onDragEnd(e) {
    // whether dropEffect is "none" can be used to detect if the drag operation
    // succeeded and ended on a valid drop target or not. If it doesn't exist
    // the operation did not end on a valid target and was cancelled.
    dispatch("drag-end", { success: e.dataTransfer.dropEffect !== "none" });
  }
</script>

<a
  on:dragstart={onDragStart}
  on:dragend={onDragEnd}
  draggable="true"
  on:click={(e) => setWikiIframe(e, skill)}
  class="skill"
  href={`https://wiki.guildwars.com/?search=${skill.name}`}
  class:elite={skill.options.is_elite}
  class:selfheal={skill.options.is_self_heal}
  class:disabled={skill.disabled}
  class:compact>
  <img {src} alt="" />
  <span class="name">{skill.name}</span>
</a>

<style>
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
    transition: 0.1s all ease-in-out;
  }

  .skill img {
    display: block;
    margin: auto;
    width: 64px;
    min-height: 64px;
    border-radius: 12px;
  }

  .skill.elite {
    outline-color: goldenrod;
  }

  .skill.disabled {
    opacity: 0.4;
    transform: scale(0.8);
    transform-origin: center;
  }

  span {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background-color: rgba(20, 20, 20, 0.3);
    padding: 0.3em;
    min-width: 100%;
    min-height: 100%;
    border-radius: 12px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 11;

    animation-name: slide;
    animation-duration: 0.1s;
  }

  .skill:hover span {
    display: flex;
  }

  .skill:hover img {
    opacity: 0.3;
  }

  @keyframes slide {
    from {
      opacity: 0.6;
    }
    to {
      opacity: 1;
    }
  }

  .skill.compact {
    outline-width: 1px;
    margin: 0.2em;
    box-shadow: 0px 0px 6px 6px rgba(20, 20, 20, 0.1);
  }

  .skill.compact img {
    width: 56px;
    min-height: 56px;
  }
</style>
