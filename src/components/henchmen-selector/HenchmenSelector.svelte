<script>
  import { getSkillPenalty } from "../../game/buildgen/restrictions";
  import { store_henchmen_count } from "../../stores/henchmen";
  import { store_players_count } from "../../stores/players_count";

  const MAX_HENCHMEN = 7;

  $: tooltip_penalty_primary = getSkillPenalty(
    $store_players_count,
    $store_henchmen_count,
    true
  );
  $: tooltip_penalty_secondary = getSkillPenalty(
    $store_players_count,
    $store_henchmen_count,
    false
  );

  $: tooltip = [
    `${tooltip_penalty_primary} disabled skills from primary profession`,
    `${tooltip_penalty_secondary} disabled skills from secondary profession`,
  ].join("\n");

  $: henchmen_percent = ($store_henchmen_count / 7) * 100;
  $: background_gradient = getBackgroundGradient(henchmen_percent);

  function increaseCount() {
    store_henchmen_count.update((count) => Math.min(count + 1, MAX_HENCHMEN));
  }

  function decreaseCount(e) {
    store_henchmen_count.update((count) => Math.max(count - 1, 0));

    e.preventDefault();
  }

  function getBackgroundGradient(percent) {
    if (percent <= 0) {
      return "white";
    }

    if (percent >= 100) {
      return "#fffcf4";
    }

    const colored = `#fffcf4 ${henchmen_percent - 15}%`;
    const white = `white ${Number(henchmen_percent) + 15}%`;
    return `linear-gradient(180deg, ${colored}, ${white})`;
  }
</script>

<div class="henchmen-selector" style={`background: ${background_gradient}`}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span
    title="click to increase by 1, right click to decrease by 1"
    on:click={increaseCount}
    on:contextmenu={decreaseCount}>Henchmen</span>
  <select bind:value={$store_henchmen_count} title={tooltip}>
    <option value={0}>0</option>
    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
    <option value={5}>5</option>
    <option value={6}>6</option>
    <option value={7}>7</option>
  </select>
</div>

<style>
  .henchmen-selector {
    margin-top: 2em;
    transform: translate(0%, 0%);
    background-color: white;
    /* width: 32px; */

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 0.4em;
    border-radius: 6px 0px 0px 6px;
    box-shadow: 3px 3px 6px rgba(20, 20, 20, 0.2);
    user-select: none;

    animation-name: appear;
    animation-duration: 1.25s;
  }

  @keyframes appear {
    0% {
      transform: translate(100%, 0%);
    }

    75% {
      transform: translate(100%, 0%);
    }

    100% {
      transform: translate(0%, 0%);
    }
  }

  span {
    writing-mode: vertical-rl;
    text-orientation: upright;
    text-transform: uppercase;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    cursor: pointer;
  }

  select {
    appearance: none;
    text-align: center;
    margin-top: 0.6em;
  }

  select:hover {
    border-color: #747bff;
  }
</style>
