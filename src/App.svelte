<script lang="ts">
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Rules from "./components/Rules.svelte";
  import SkillsetDisplay from "./components/SkillsetDisplay.svelte";
  import SuggestedOutposts from "./components/SuggestedOutposts.svelte";
  import WikiIframe from "./components/WikiIframe.svelte";
  import store_skillset, { refreshBuildsStore } from "./stores/builds";
  import { store_campaign } from "./stores/campaign";
  import {
    store_character_name,
    store_primary_profession,
    store_secondary_profession,
  } from "./stores/character";
  import { store_selected_outpost } from "./stores/outposts";
  import {
    refreshSkillpacks,
    store_selected_skillpacks,
  } from "./stores/skillpacks";
  import background from "./background.webp";

  $: primary_skillset = $store_skillset.get($store_primary_profession);
  $: secondary_skillset =
    $store_secondary_profession !== "none"
      ? $store_skillset.get($store_secondary_profession)
      : null;

  $: can_display_skillsets =
    ((Boolean(primary_skillset) && primary_skillset.size) ||
      (Boolean(secondary_skillset) && secondary_skillset.size)) &&
    Boolean($store_selected_outpost);

  function refreshStuff() {
    refreshSkillpacks();
    refreshBuildsStore();
  }

  store_character_name.subscribe(refreshStuff);
  store_primary_profession.subscribe(refreshStuff);
  store_secondary_profession.subscribe(refreshStuff);
  store_campaign.subscribe(refreshStuff);
  store_selected_outpost.subscribe(refreshStuff);

  store_selected_skillpacks.subscribe(refreshBuildsStore);
</script>

<Header />

{#if can_display_skillsets}
  <div class="skillsets">
    {#if $store_selected_outpost && $store_selected_outpost.name}
      <h1 class="outpost-name">{$store_selected_outpost.name}</h1>
      <SuggestedOutposts />
    {/if}

    <div class="inner">
      <SkillsetDisplay
        profession={$store_primary_profession}
        skillset={primary_skillset} />

      {#if $store_secondary_profession !== "none"}
        <SkillsetDisplay
          profession={$store_secondary_profession}
          skillset={secondary_skillset} />
      {/if}
    </div>

    <img src={background} alt="" class="background" />
  </div>
{/if}

<Rules />
<WikiIframe />
<Footer />

<style>
  .background {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0.2;

    animation-name: appear;
    animation-duration: 0.6s;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 0.2;
    }
  }

  .outpost-name {
    text-align: center;
    text-decoration: underline;
    margin: 0;
  }

  .skillsets {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    animation-name: grow;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
    padding-top: 2em;
  }

  @keyframes grow {
    from {
      max-height: 0%;
    }

    to {
      max-height: 100%;
    }
  }

  .skillsets .inner {
    margin: auto;
    position: relative;
    display: flex;
    max-width: 1250px;
  }
</style>
