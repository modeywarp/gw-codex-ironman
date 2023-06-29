<script lang="ts">
  import { store_selected_outpost, store_outposts } from "../stores/outposts";
  import {
    store_available_secondary_professions,
    store_character_name,
    store_primary_profession,
    store_secondary_profession,
  } from "../stores/character";
  import { all_professions } from "../game/professions";
  import { refreshBuildsStore } from "../stores/builds";
  import { store_campaign } from "../stores/campaign";
  import { InputFocusState, store_input_focus } from "../stores/input_focus";
  import { store_selected_skillpacks } from "../stores/skillpacks";
  import { ALL_SKILL_ORIGINS } from "../game/codegen/subgroups/campaigns";

  let field_character_name;

  $: display_outposts = $store_character_name.length > 0;

  store_input_focus.subscribe((field) => {
    if (field === InputFocusState.CharacterName) {
      field_character_name.focus();
    }
  });

  function onSubmitGenerateSkillset() {
    refreshBuildsStore();
  }
</script>

<header>
  <div class="title">
    <h1>GW - Codex Ironman</h1>
    <hr class="spacer" />

    <button
      class:active={$store_campaign == "Prophecy"}
      on:click={() => store_campaign.set("Prophecy")}>Prophecy</button>
    <button
      class:active={$store_campaign == "Faction"}
      on:click={() => store_campaign.set("Faction")}>Faction</button>
    <button
      class:active={$store_campaign == "Nightfall"}
      on:click={() => store_campaign.set("Nightfall")}>Nightfall</button>
    <button
      class:active={$store_campaign == "GWEN"}
      on:click={() => store_campaign.set("GWEN")}>GWEN</button>
  </div>

  <div class="actions">
    <input
      type="text"
      placeholder="Character name"
      bind:this={field_character_name}
      bind:value={$store_character_name} />
    <select name="primary-profession" bind:value={$store_primary_profession}>
      {#each all_professions as profession}
        <option value={profession}>{profession}</option>
      {/each}
    </select>
    <select
      name="secondary-profession"
      bind:value={$store_secondary_profession}>
      {#each $store_available_secondary_professions as profession}
        <option value={profession}>{profession}</option>
      {/each}
    </select>

    <hr class="spacer" />

    <div
      class="skill-packs"
      title="Set one or more skill packs to use while generating the codex skills">
      <span> Skill packs: </span>

      {#each ALL_SKILL_ORIGINS as pack}
        <input
          type="checkbox"
          name={pack}
          id={pack}
          style="display: none;"
          bind:group={$store_selected_skillpacks}
          value={pack} />
        <label for={pack}>{pack}</label>
      {/each}
    </div>
  </div>
</header>

<style>
  header {
    padding: 2em;
    background: white;
    /* box-shadow: 0px 6px 12px rgba(20, 20, 20, 0.2); */
  }

  .actions,
  .title,
  .skill-packs {
    display: flex;
    align-items: center;
  }

  @media (max-width: 1815px) {
    .actions {
      flex-wrap: wrap;
    }

    .skill-packs {
      display: flex;
      justify-content: flex-end;
      flex-grow: 1;
      margin-top: 0.6em;
    }
  }
  .skill-packs label {
    margin-left: 1em;
  }

  h1 {
    margin: 0;
  }

  .spacer {
    flex-grow: 1;
    border: solid 1px whitesmoke;
  }

  header .actions > * + *,
  header .title > * + * {
    margin-left: 1em;
  }

  .active,
  input:checked + label {
    background: #646cff;
    color: white;
  }

  select {
    text-transform: capitalize;
  }
</style>
