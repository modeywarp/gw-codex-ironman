<script>
  import HenchmenSelector from "./HenchmenSelector.svelte";
  import PlayersSelector from "./PlayersSelector.svelte";
</script>

<div class="group-selector">
  <PlayersSelector />
  <HenchmenSelector />
</div>

<style>
  /*  */

  .group-selector {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0%, -25%);

    display: flex;
    flex-direction: column;
  }
</style>
