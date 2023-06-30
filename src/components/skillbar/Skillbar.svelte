<script>
  import { get } from "svelte/store";
  import { encodeBuildTemplate } from "../../api/decodetemplate";
  import {
    store_character_name,
    store_primary_profession,
    store_secondary_profession,
  } from "../../stores/character";
  import {
    removeAllSkillsFromSkillbar,
    store_skillbar,
  } from "../../stores/skillbar";
  import Skillslot from "./Skillslot.svelte";
  import { notify_info } from "../../stores/notifications";

  function clearSkillbar() {
    removeAllSkillsFromSkillbar();
    notify_info("Skill bar cleared");
  }

  async function copyBuildTemplate() {
    notify_info("Generating build template...");

    const response = await encodeBuildTemplate(
      get(store_primary_profession),
      get(store_secondary_profession),
      get(store_skillbar)
    );

    navigator.clipboard.writeText(
      `[${$store_character_name};${response.code}]`
    );

    notify_info("Build template copied.");
  }
</script>

<div class="skillbar">
  <Skillslot slot_number={0} />
  <Skillslot slot_number={1} />
  <Skillslot slot_number={2} />
  <Skillslot slot_number={3} />
  <Skillslot slot_number={4} />
  <Skillslot slot_number={5} />
  <Skillslot slot_number={6} />
  <Skillslot slot_number={7} />

  {#if $store_skillbar.size > 0}
    <div class="actions">
      <button on:click={clearSkillbar} title="Clear skill bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <button
        on:click={copyBuildTemplate}
        title="Generate & copy build template code">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      </button>
    </div>
  {/if}
</div>

<div class="note">Drag skills in the bar to generate a build template</div>

<style>
  .skillbar {
    position: relative;
    /* position: fixed;
    bottom: 2em;
    left: 50%;
    transform: translate(-50%, 0); */

    display: flex;
    margin: auto;
    margin-top: 2em;
    box-shadow: 0px 0px 12px rgba(20, 20, 20, 0.15);
    border: solid 6px whitesmoke;
    z-index: 10;

    border-radius: 12px;
    background-color: white;
  }

  .actions {
    position: absolute;
    left: calc(100% + 24px);
    top: 50%;
    transform: translate(0%, -50%);

    display: flex;
    align-items: center;
    border: solid 6px whitesmoke;
    border-radius: 12px;
    box-shadow: 0px 0px 6px rgba(20, 20, 20, 0.2);
    font-size: 0.8em;

    animation-name: slide;
    animation-duration: 0.05s;
    animation-timing-function: linear;
    z-index: -1;
  }

  .actions > button {
    background-color: white;
    border-radius: 6px;
    align-items: center;
    display: flex;
  }

  .note {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: italic;
    font-size: 80%;
    margin: 1em 0;
  }

  .skillbar,
  .note {
    animation-name: appear;
    animation-duration: 1s;
    animation-timing-function: linear;
  }

  @keyframes slide {
    from {
      transform: translate(-10%, -50%);
    }

    to {
      transform: translate(0, -50%);
    }
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }

    70% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>
