<script lang="ts">
  import store_campaign from "../stores/campaign";
  import store_outposts from "../stores/outposts";
</script>

<header>
  <div class="title">
    <h1>GW - Codex Ironman</h1>
    <hr class="spacer" />

    <button
      class:active={$store_campaign == "Pre-Searing"}
      on:click={() => store_campaign.set("Pre-Searing")}>Pre-Searing</button
    >
    <button
      class:active={$store_campaign == "Prophecy"}
      on:click={() => store_campaign.set("Prophecy")}>Prophecy+Gwen</button
    >
    <button
      class:active={$store_campaign == "Faction"}
      on:click={() => store_campaign.set("Faction")}>Faction</button
    >
    <button
      class:active={$store_campaign == "Nightfall"}
      on:click={() => store_campaign.set("Nightfall")}>Nightfall</button
    >
  </div>

  <div class="actions">
    <input type="text" placeholder="Character name" />
    <select name="primary-profession">
      <option value="warrior">Warrior</option>
      <option value="ranger">Ranger</option>
      <option value="elementalist">Elementalist</option>
      <option value="monk">Monk</option>
      <option value="mesmer">Mesmer</option>
      <option value="assassin">Assassin</option>
      <option value="ritualist">Ritualist</option>
      <option value="dervish">Dervish</option>
      <option value="paragon">Paragon</option>
    </select>
    <select name="secondary-profession">
      <option value="none">None</option>
      <option value="warrior">Warrior</option>
      <option value="ranger">Ranger</option>
      <option value="elementalist">Elementalist</option>
      <option value="monk">Monk</option>
      <option value="mesmer">Mesmer</option>
      <option value="assassin">Assassin</option>
      <option value="ritualist">Ritualist</option>
      <option value="dervish">Dervish</option>
      <option value="paragon">Paragon</option>
    </select>
    <hr class="spacer" />
    <select name="outpost">
      {#each $store_outposts as region}
        <optgroup label={region.name}>
          {#each region.outposts as outpost}
            <option value={outpost.link}>{outpost.name}</option>
          {/each}
        </optgroup>
      {/each}
    </select>
  </div>
</header>

<style>
  .actions,
  .title {
    display: flex;
    align-items: center;
  }

  h1 {
    margin: 0;
  }

  .spacer {
    flex-grow: 1;
    border: solid 1px whitesmoke;
  }

  header .actions > * + *,
  header .title > * + * {
    margin-left: 1em;
  }

  .active {
    background: #646cff;
    color: white;
  }
</style>
