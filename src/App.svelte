<script>
  import Header from "./components/Header.svelte";
  import SkillsetDisplay from "./components/SkillsetDisplay.svelte";
  import store_skillset from "./stores/builds";
  import {
    store_primary_profession,
    store_secondary_profession,
  } from "./stores/character";

  $: primary_skillset = $store_skillset.get($store_primary_profession);
  $: secondary_skillset =
    $store_secondary_profession !== "none"
      ? $store_skillset.get($store_secondary_profession)
      : null;
</script>

<Header />

<div class="skillsets">
  <SkillsetDisplay
    profession={$store_primary_profession}
    skillset={primary_skillset}
  />
  {#if $store_secondary_profession !== "none"}
    <SkillsetDisplay
      profession={$store_secondary_profession}
      skillset={secondary_skillset}
    />
  {/if}
</div>

<img src="/py6cbseq.webp" alt="" class="background" />

<!-- <img src="/n1swb8x3.bmp" alt="" class="background-1" /> -->

<style>
  .background,
  .background-1 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.2;
  }

  .background-1 {
    opacity: 0.6;
  }

  .skillsets {
    display: flex;
  }
</style>
