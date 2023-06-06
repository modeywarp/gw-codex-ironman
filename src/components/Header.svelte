<script lang="ts">
  import store_outposts, { store_selected_outpost } from "../stores/outposts";
  import {
    store_available_secondary_professions,
    store_character_name,
    store_primary_profession,
    store_secondary_profession,
  } from "../stores/character";
  import { all_professions } from "../game/professions";
  import { refreshBuildsStore } from "../stores/builds";
  import { store_campaign } from "../stores/campaign";

  $: display_outposts = $store_character_name.length > 0;

  function onSubmitGenerateSkillset() {
    refreshBuildsStore();
  }
</script>

<header>
  <div class="title">
    <h1>GW - Codex Ironman</h1>
    <hr class="spacer" />

    <button
      class:active={$store_campaign == "Pre-Searing"}
      on:click={() => store_campaign.set("Pre-Searing")}>Pre-Searing</button
    >
    <button
      class:active={$store_campaign == "Prophecy"}
      on:click={() => store_campaign.set("Prophecy")}>Prophecy</button
    >
    <button
      class:active={$store_campaign == "Faction"}
      on:click={() => store_campaign.set("Faction")}>Faction</button
    >
    <button
      class:active={$store_campaign == "Nightfall"}
      on:click={() => store_campaign.set("Nightfall")}>Nightfall</button
    >
    <button
      class:active={$store_campaign == "Gwen"}
      on:click={() => store_campaign.set("Gwen")}>GWEN</button
    >
  </div>

  <div class="actions">
    <input
      type="text"
      placeholder="Character name"
      bind:value={$store_character_name}
    />
    <select name="primary-profession" bind:value={$store_primary_profession}>
      {#each all_professions as profession}
        <option value={profession}>{profession}</option>
      {/each}
    </select>
    <select
      name="secondary-profession"
      bind:value={$store_secondary_profession}
    >
      {#each $store_available_secondary_professions as profession}
        <option value={profession}>{profession}</option>
      {/each}
    </select>
    {#if display_outposts}
      <hr class="spacer" />
      <select name="outpost" bind:value={$store_selected_outpost}>
        {#each $store_outposts as region}
          <optgroup label={region.name}>
            {#each region.outposts as outpost}
              <option value={outpost.link}>{outpost.name}</option>
            {/each}
          </optgroup>
        {/each}
      </select>
      <button on:click={onSubmitGenerateSkillset}>Generate skillset</button>
    {/if}
  </div>
</header>

<style>
  header {
    padding: 2em;
    background: white;
    box-shadow: 0px 6px 12px rgba(20, 20, 20, 0.2);
    margin-bottom: 2em;
  }

  .actions,
  .title {
    display: flex;
    align-items: center;
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

  .active {
    background: #646cff;
    color: white;
  }

  select {
    text-transform: capitalize;
  }
</style>
