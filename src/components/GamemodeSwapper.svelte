<script lang="ts">
  import { store_gamemode, type GameMode } from "../stores/gamemode";

  function previous(e, mode: GameMode) {
    e.preventDefault();
    store_gamemode.set(mode);
  }
</script>

{#if $store_gamemode == "normal"}
  <button
    on:click={() => store_gamemode.set("hard")}
    on:contextmenu={(e) => previous(e, "attributes")}>
    Normal
  </button>
{/if}
{#if $store_gamemode === "hard"}
  <button
    class="hardmode"
    on:click={() => store_gamemode.set("attributes")}
    on:contextmenu={(e) => previous(e, "normal")}>
    Hard
  </button>
{/if}
{#if $store_gamemode === "attributes"}
  <button
    class="attributes"
    on:click={() => store_gamemode.set("normal")}
    on:contextmenu={(e) => previous(e, "hard")}>
    Attributes
  </button>
{/if}

<style>
  button {
    box-shadow: 0px 0px 12px rgba(20, 20, 20, 0.1);
  }

  button.hardmode {
    outline: solid 1px goldenrod;
    box-shadow: 0px 0px 12px rgba(218, 165, 32, 0.4);
    color: goldenrod;
  }

  button.attributes {
    outline: solid 1px mediumpurple;
    box-shadow: 0px 0px 12px rgba(147, 112, 216, 0.4);
    color: mediumpurple;
  }
</style>
