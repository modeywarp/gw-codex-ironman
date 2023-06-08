<script lang="ts">
  import type { Outpost } from "../game/outposts";
  import {
    store_selected_outpost,
    store_suggested_outposts,
  } from "../stores/outposts";

  function onClickedSuggestedOutpost(outpost: Outpost) {
    store_selected_outpost.set(outpost);
  }
</script>

<div class="suggested-outposts">
  {#each $store_suggested_outposts.slice(0, 2) as outpost}
    <button class="outpost" on:click={() => onClickedSuggestedOutpost(outpost)}>
      {outpost.name}
    </button>
  {/each}
  <span>↔</span>
  {#each $store_suggested_outposts.slice(2) as outpost}
    <button class="outpost" on:click={() => onClickedSuggestedOutpost(outpost)}>
      {outpost.name}
    </button>
  {/each}
</div>

<style>
  .suggested-outposts {
    display: flex;
    margin-top: 1em;
    align-items: center;
  }

  .suggested-outposts .outpost {
    display: flex;
    align-items: center;
    background-color: black;
    color: white;
    padding: 0.2em 0.6em;
    border-radius: 12px;
    cursor: pointer;
    font-size: 70%;
    opacity: 0.5;
    font-family: "Courier New", Courier, monospace;
    margin: 0 0.4em;
  }

  .suggested-outposts .outpost:hover {
    opacity: 1;
  }
</style>
