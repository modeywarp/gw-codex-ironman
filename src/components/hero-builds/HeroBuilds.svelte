<script lang="ts">
  import { getRegionForOutpost } from "../../game/outposts";
  import { all_professions, type Profession } from "../../game/professions";
  import { store_selected_outpost } from "../../stores/outposts";
  import BuildsPreview from "./BuildsPreview.svelte";

  const professions = all_professions;

  let selected_profession: Profession | null = null;

  $: selected_region = getRegionForOutpost($store_selected_outpost);

  // github pages aren't hosted on a domain's root, each repository is in a sub
  // folder, so this is a way to get icons to load once pushed to production.
  const image_root = import.meta.env.PROD ? import.meta.env.BASE_URL : "";
</script>

<div class="hero-builds">
  <h1>{selected_region.name} - Hero builds</h1>

  <div class="profession-selector">
    {#each professions as profession}
      <button on:click={() => (selected_profession = profession)}
        ><img
          src={`${image_root}/profession-icons/${profession}.png`}
          alt={`${profession} icon`} /></button>
    {/each}

    <button on:click={() => (selected_profession = null)}
      ><svg
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
      </svg></button>
  </div>

  {#if selected_profession !== null}
    <BuildsPreview profession={selected_profession} region={selected_region} />
  {/if}
</div>

<style>
  .hero-builds {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profession-selector {
    display: flex;
    align-items: center;
  }
  .profession-selector button {
    margin: 0.2em;
  }
</style>
