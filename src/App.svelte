<script>
  import Header from "./components/Header.svelte";
  import SkillsetDisplay from "./components/SkillsetDisplay.svelte";
  import store_skillset, { refreshBuildsStore } from "./stores/builds";
  import { store_campaign } from "./stores/campaign";
  import {
    store_character_name,
    store_primary_profession,
    store_secondary_profession,
  } from "./stores/character";
  import { store_selected_outpost } from "./stores/outposts";

  $: primary_skillset = $store_skillset.get($store_primary_profession);
  $: secondary_skillset =
    $store_secondary_profession !== "none"
      ? $store_skillset.get($store_secondary_profession)
      : null;

  store_primary_profession.subscribe(refreshBuildsStore);
  store_secondary_profession.subscribe(refreshBuildsStore);
  store_campaign.subscribe(refreshBuildsStore);
  store_selected_outpost.subscribe(refreshBuildsStore);
</script>

<Header />

{#if Boolean(primary_skillset) && primary_skillset.size}
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

  .skillsets {
    position: relative;
    display: flex;
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
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    transform: skewY(15def);
    background-color: white;
    z-index: -1;
  }

  .rules h1 {
    text-align: center;
  }

  .rules > * {
    max-width: 450px;
  }
</style>
