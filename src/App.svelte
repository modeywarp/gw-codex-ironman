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
    where players have a limited skillset available to them everyday, you must complete
    the campaigns with a set of skills that varies as you progress.
  </p>

  <p>
    Two variants of the mode are available. Both revolving around having a
    limited skillset in order to spice things up, the outposts replace the daily
    rotation you'd usually see in the Codex Arena:
  </p>

  <hr />

  <div class="cells">
    <div class="row split">
      <h3>Regular</h3>
      <h3>Ironman</h3>
    </div>
    <div class="row split">
      <p>Pick the character of your choice.</p>
      <p>
        Create a fresh character using the <a
          href="https://wiki.guildwars.com/wiki/User:Hazedesunna/Ironman"
          >Ironman rules</a
        >
        of your choice.
      </p>
    </div>

    <div class="row center">
      <i>
        Before leaving an outpost or a city into an explorable area you must
        ensure your skillbar contains only skills from the offered skillset of:
      </i>
    </div>
    <div class="row split">
      <p>
        the outpost <u>you're currently in</u>.
      </p>
      <p>
        the <u>last outpost you unlocked.</u>
      </p>
    </div>
  </div>

  <hr />

  <p>
    Heroes are subject are subject to the same rules as the player character
    with one exception: they are able to use the skillsets from any of the
    previously discovered outposts. As it would be too cumbersome to edit the
    build of a whole group every outpost. Even with this exception discovering
    outposts should still provide some welcomed build-crafting potential
  </p>

  <hr />

  <p>
    Start by entering your character name & the outpost you're in according to
    the rules you use (Regular or Ironman)
  </p>
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
    animation-name: grow;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
    overflow: hidden;
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

  .rules > p {
    max-width: 450px;
  }

  .rules > .cells {
    max-width: 850px;
  }

  .rules .cells .row {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .rules .cells .row h3 {
    text-align: center;
  }

  .rules .cells .row.split {
    justify-content: space-evenly;
  }

  .rules .cells .row.split > * {
    flex-grow: 1;
    width: 50%;
    margin: 1em;
  }

  .rules .cells .row.center {
    max-width: 450px;
    text-align: center;
    margin: auto;
  }
</style>
