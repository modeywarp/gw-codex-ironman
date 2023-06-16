<script lang="ts">
  import IconWarrior from "../../assets/profession-icons/Warrior-tango-icon-200.webp";
  import IconRanger from "../../assets/profession-icons/Ranger-tango-icon-200.webp";
  import IconMonk from "../../assets/profession-icons/Monk-tango-icon-200.webp";
  import IconMesmer from "../../assets/profession-icons/Mesmer-tango-icon-200.webp";
  import IconNecromancer from "../../assets/profession-icons/Necromancer-tango-icon-200.webp";
  import IconElementalist from "../../assets/profession-icons/Elementalist-tango-icon-200.webp";
  import IconAssassin from "../../assets/profession-icons/Assassin-tango-icon-200.webp";
  import IconRitualist from "../../assets/profession-icons/Ritualist-tango-icon-200.webp";
  import IconDervish from "../../assets/profession-icons/Dervish-tango-icon-200.webp";
  import IconParagon from "../../assets/profession-icons/Paragon-tango-icon-200.webp";
  import type { Profession } from "../../game/professions";

  export let profession: Profession = "warrior";

  let enabled = false;

  function toggle() {
    enabled = !enabled;

    // if (enabled) {
    //   $store_henchmen.delete(profession);
    // } else {
    //   $store_henchmen.add(profession);
    // }
  }
</script>

<button on:click={toggle} class:enabled>
  {#if profession == "warrior"}
    <img src={IconWarrior} alt="" />
  {:else if profession == "ranger"}
    <img src={IconRanger} alt="" />
  {:else if profession == "monk"}
    <img src={IconMonk} alt="" />
  {:else if profession == "mesmer"}
    <img src={IconMesmer} alt="" />
  {:else if profession == "elementalist"}
    <img src={IconElementalist} alt="" />
  {:else if profession == "necromancer"}
    <img src={IconNecromancer} alt="" />
  {:else if profession == "assassin"}
    <img src={IconAssassin} alt="" />
  {:else if profession == "ritualist"}
    <img src={IconRitualist} alt="" />
  {:else if profession == "dervish"}
    <img src={IconDervish} alt="" />
  {:else if profession == "paragon"}
    <img src={IconParagon} alt="" />
  {/if}
</button>

<style>
  button {
    padding: 0.3em;
    margin: 0.1em;
    filter: saturate(0);
    animation-name: appear;
    animation-duration: 2.25s;
  }

  @keyframes appear {
    0% {
      filter: saturate(1);
    }

    80% {
      filter: saturate(1);
    }

    100% {
      filter: saturate(0);
    }
  }

  .enabled {
    filter: saturate(1);
  }

  img {
    height: 32px;
    border-radius: 6px;
    /* box-shadow: 0px 0px 2px rgba(20, 20, 20, 0.2); */
    user-select: none;
  }
</style>
