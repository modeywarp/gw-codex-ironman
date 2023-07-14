<script lang="ts">
  import {
    addSkilltoSkillbar,
    store_skillbar,
    type SkillbarEntry,
    removeSkillFromSkillslot,
  } from "../../stores/skillbar";
  import SkillIcon from "../SkillIcon.svelte";

  export let slot_number: number = 0;

  let equipped_skill: SkillbarEntry;
  let previewed_skill: SkillbarEntry;
  let disable_preview = false;

  $: is_elite =
    previewed_skill?.skill?.options?.is_elite ||
    equipped_skill?.skill?.options?.is_elite ||
    false;

  store_skillbar.subscribe((map) => {
    equipped_skill = map.get(slot_number);

    dragLeave();
  });

  function equipSkill(e) {
    const { skill, profession } = JSON.parse(
      e.dataTransfer.getData("text/plain")
    );

    dragLeave();
    addSkilltoSkillbar(slot_number, skill, profession);
  }

  // frop the drop event to work, the drop event must call preventDefault();
  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    const { skill, profession } = JSON.parse(
      e.dataTransfer.getData("text/plain")
    );

    previewed_skill = { skill, profession };
  }

  function dragLeave() {
    previewed_skill = null;
  }

  function dragStart() {
    disable_preview = true;
  }

  function dragEnd({ detail }) {
    disable_preview = false;

    if (!detail.success) {
      removeSkillFromSkillslot(slot_number);
    }
  }
</script>

<div
  class="skillslot"
  class:elite={is_elite}
  on:dragover={dragOver}
  on:drop={equipSkill}
  on:dragleave={dragLeave}
  on:dragenter={dragEnter}>
  {#if previewed_skill && !disable_preview}
    <SkillIcon
      skill={previewed_skill.skill}
      profession={previewed_skill.profession}
      compact={!is_elite}
      on:drag-start={dragStart}
      on:drag-end={dragEnd} />
  {:else if equipped_skill}
    <SkillIcon
      skill={equipped_skill.skill}
      profession={equipped_skill.profession}
      compact={!is_elite}
      on:drag-start={dragStart}
      on:drag-end={dragEnd} />
  {:else}
    {slot_number + 1}
  {/if}
</div>

<style>
  .skillslot {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(64px + 8px);
    min-width: calc(64px + 8px);
    outline: solid 1px whitesmoke;
  }
</style>
