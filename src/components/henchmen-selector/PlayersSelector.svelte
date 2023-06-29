<script>
  import { getSkillPenaltyFromPlayersCount } from "../../game/buildgen/players_count_restrictions";
  import { store_players_count } from "../../stores/players_count";

  const MAX_PLAYERS = 12;

  $: tooltip_penalty_primary = getSkillPenaltyFromPlayersCount(
    $store_players_count,
    true
  );
  $: tooltip_penalty_secondary = getSkillPenaltyFromPlayersCount(
    $store_players_count,
    false
  );

  $: tooltip = [
    `${tooltip_penalty_primary} disabled skills from primary profession`,
    `${tooltip_penalty_secondary} disabled skills from secondary profession`,
  ].join("\n");

  $: players_percent = ($store_players_count / 7) * 100;
  $: background_gradient = getBackgroundGradient(players_percent);

  function increaseCount() {
    store_players_count.update((count) => Math.min(count + 1, MAX_PLAYERS));
  }

  function resetCount() {
    store_players_count.set(1);
  }

  function getBackgroundGradient(percent) {
    if (percent <= 0) {
      return "white";
    }

    if (percent >= 100) {
      return "#fffcf4";
    }

    const colored = `#fffcf4 ${players_percent - 15}%`;
    const white = `white ${Number(players_percent) + 15}%`;
    return `linear-gradient(180deg, ${colored}, ${white})`;
  }
</script>

<div class="players-selector" style={`background: ${background_gradient}`}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span
    on:click={increaseCount}
    on:dblclick={resetCount}
    title="click to increase by 1, double click to reset">Players</span>
  <select bind:value={$store_players_count} title={tooltip}>
    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
    <option value={5}>5</option>
    <option value={6}>6</option>
    <option value={7}>7</option>
    <option value={8}>8</option>
    <option value={9}>9</option>
    <option value={10}>10</option>
    <option value={11}>11</option>
    <option value={12}>12</option>
  </select>
</div>

<style>
  .players-selector {
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
    animation-duration: 1s;
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
    cursor: row-resize;
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
