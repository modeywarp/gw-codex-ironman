<script>
  import { getSkillPenaltyFromHenchmen } from "../../game/buildgen/henchmen_restrictions";
  import { store_henchmen_count } from "../../stores/henchmen";

  $: tooltip_penalty_primary = getSkillPenaltyFromHenchmen(
    $store_henchmen_count,
    true
  );
  $: tooltip_penalty_secondary = getSkillPenaltyFromHenchmen(
    $store_henchmen_count,
    false
  );

  $: tooltip = [
    `${tooltip_penalty_primary} disabled skills from primary profession`,
    `${tooltip_penalty_secondary} disabled skills from secondary profession`,
  ].join("\n");

  let mouse_down = false;
  let last_y = 0;
  function onMouseDown(e) {
    e.preventDefault();

    mouse_down = true;
  }

  function onMouseUp(e) {
    e.preventDefault();

    mouse_down = false;
    last_y = 0;
  }

  function onMouseMove(e) {
    if (!mouse_down) {
      return;
    }

    if (last_y == 0) {
      last_y = e.layerY;
    }

    const difference = Math.floor((e.layerY - last_y) / 10);

    if (difference !== 0) {
      last_y = e.layerY;
    }

    const new_value = $store_henchmen_count + difference;
    const clamped_value = Math.min(Math.max(new_value, 0), 7);
    if ($store_henchmen_count != clamped_value) {
      $store_henchmen_count = clamped_value;
    }
  }
</script>

<div class="henchmen-selector">
  <!--  -->

  <span
    on:mousedown={onMouseDown}
    on:mouseup={onMouseUp}
    on:mouseleave={onMouseUp}
    on:mousemove={onMouseMove}>henchmen</span>
  <select bind:value={$store_henchmen_count} title={tooltip}>
    <optgroup label="Veteran">
      <option value={0}>0</option>
    </optgroup>
    <optgroup label="Recommended">
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
    </optgroup>
    <optgroup label="Easy">
      <option value={5}>5</option>
      <option value={6}>6</option>
      <option value={7}>7</option>
    </optgroup>
  </select>
</div>

<style>
  .henchmen-selector {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0%, -50%);
    background-color: white;
    /* width: 32px; */

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.4em 0.4em;
    border-radius: 6px 0px 0px 6px;
    box-shadow: 3px 3px 6px rgba(20, 20, 20, 0.2);
    user-select: none;

    animation-name: appear;
    animation-duration: 1s;
  }

  @keyframes appear {
    0% {
      transform: translate(100%, -50%);
    }

    75% {
      transform: translate(100%, -50%);
    }

    100% {
      transform: translate(0%, -50%);
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
  }

  select:hover {
    border-color: #747bff;
  }
</style>
