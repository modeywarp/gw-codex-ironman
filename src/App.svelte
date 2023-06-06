<script lang="ts">
  import Header from "./components/Header.svelte";
  import SkillsetDisplay from "./components/SkillsetDisplay.svelte";
  import type { Outpost } from "./game/outposts";
  import store_skillset, { refreshBuildsStore } from "./stores/builds";
  import { store_campaign } from "./stores/campaign";
  import {
    store_character_name,
    store_primary_profession,
    store_secondary_profession,
  } from "./stores/character";
  import {
    store_selected_outpost,
    store_suggested_outposts,
  } from "./stores/outposts";

  $: primary_skillset = $store_skillset.get($store_primary_profession);
  $: secondary_skillset =
    $store_secondary_profession !== "none"
      ? $store_skillset.get($store_secondary_profession)
      : null;

  store_character_name.subscribe(refreshBuildsStore);
  store_primary_profession.subscribe(refreshBuildsStore);
  store_secondary_profession.subscribe(refreshBuildsStore);
  store_campaign.subscribe(refreshBuildsStore);
  store_selected_outpost.subscribe(refreshBuildsStore);

  store_campaign.subscribe((campaign) => {
    store_selected_outpost;
  });

  function onClickedSuggestedOutpost(outpost: Outpost) {
    store_selected_outpost.set(outpost);
  }
</script>

<Header />

{#if Boolean(primary_skillset) && primary_skillset.size && $store_selected_outpost}
  <div class="skillsets">
    {#if $store_selected_outpost && $store_selected_outpost.name}
      <h1 class="outpost-name">{$store_selected_outpost.name}</h1>
      <div class="suggested-outposts">
        {#each $store_suggested_outposts.slice(0, 2) as outpost}
          <button
            class="outpost"
            on:click={() => onClickedSuggestedOutpost(outpost)}
          >
            {outpost.name}
          </button>
        {/each}
        <span>↔</span>
        {#each $store_suggested_outposts.slice(2) as outpost}
          <button
            class="outpost"
            on:click={() => onClickedSuggestedOutpost(outpost)}
          >
            {outpost.name}
          </button>
        {/each}
      </div>
    {/if}

    <div class="inner">
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
  </div>
{/if}

<section class="rules">
  <h1>Rules</h1>

  <p>
    Similar to the <a href="https://wiki.guildwars.com/wiki/Codex_Arena"
      >Codex Arena</a
    >
    where players have a limited skillset available to them. In the Arena the skillset
    is generated using specific rules everyday, in the GW Codex Ironman mode however
    it depends on your character name as well as the outpost you're currently in.
  </p>

  <ul>
    <li>
      Pick the <a
        href="https://wiki.guildwars.com/wiki/User:Hazedesunna/Ironman"
        >Ironman rules</a
      >
      of your choice.

      <ul>
        <li>
          With one possible exception: you can buy any skill offered by skill
          merchants
        </li>
      </ul>
    </li>
    <li>
      Before leaving an outpost or a city into an explorable area you must
      ensure your skillbar contains only skills from the offered skillset and
      for the outpost you're currently in.
    </li>
    <li>
      Heroes:
      <ul>
        <li>Use the player character name for generating the skillsets</li>
        <li>
          Unlike the player, they are able to keep the builds from previously
          discovered outposts. It would be too cumbersome to edit the build of 7
          in every outpost, but discovering outposts should still provide more
          build-crafting
        </li>
      </ul>
    </li>
  </ul>

  <p>Exceptions & Quality Of Life:</p>
  <ul>
    <li>
      After entering an outpost if no interaction was performed with any of the
      NPCs inside, or with the current build, or without starting a coop
      mission, it is possible to exit the outpost back to the explorable area
      without changing the build. This should help if the player is running from
      one place to another but crosses outposts he'd like to unlock.
    </li>
  </ul>
</section>

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
  }

  .outpost-name {
    text-align: center;
    text-decoration: underline;
    margin: 0;
  }

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

  .skillsets {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .skillsets .inner {
    margin: auto;
    position: relative;
    display: flex;
    max-width: 1250px;
  }

  .rules {
    position: relative;
    background-color: white;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
  }

  .rules::before {
    content: "";
    position: absolute;
    top: -200px;
    left: 0;
    width: 100%;
    height: 400px;
    transform: skewY(-8deg);
    background-color: white;
    box-shadow: 0 -20px 45px 0px rgba(20, 20, 20, 0.2);
    z-index: -1;
  }

  .rules h1 {
    text-align: center;
  }

  .rules > * {
    max-width: 450px;
  }
</style>
