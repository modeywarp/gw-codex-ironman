<script>
  import { get } from "svelte/store";
  import { encodeBuildTemplate } from "../../api/decodetemplate";
  import {
    store_primary_profession,
    store_secondary_profession,
  } from "../../stores/character";
  import {
    removeAllSkillsFromSkillbar,
    store_skillbar,
  } from "../../stores/skillbar";
  import Skillslot from "./Skillslot.svelte";

  function clearSkillbar() {
    removeAllSkillsFromSkillbar();
  }

  async function copyBuildTemplate() {
    const response = await encodeBuildTemplate(
      get(store_primary_profession),
      get(store_secondary_profession),
      get(store_skillbar)
    );

    console.log(response);
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
  <div class="actions">
    <button on:click={clearSkillbar}>
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
    <button on:click={copyBuildTemplate}>
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
</div>

<style>
  .skillbar {
    position: fixed;
    bottom: 2em;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    margin: auto;
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
  }

  .actions > button {
    background-color: white;
    border-radius: 6px;
  }
</style>
