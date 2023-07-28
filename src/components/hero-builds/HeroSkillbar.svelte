<script lang="ts">
  import { encodeBuildTemplate } from "../../api/decodetemplate";
  import type { AttributesTree } from "../../game/attributegen";
  import type { Region } from "../../game/outposts";
  import type { Profession, SecondaryProfession } from "../../game/professions";
  import type { SkillsetEntry } from "../../stores/builds";
  import { store_compact_icons } from "../../stores/compact_icons";
  import { notify_info } from "../../stores/notifications";
  import capitalize from "../../utils/capitalize";
  import SkillIcon from "../SkillIcon.svelte";

  export let attributes: AttributesTree = null;
  export let build: SkillsetEntry[] = [];
  export let profession: Profession = "warrior";
  export let secondary_profession: SecondaryProfession = "none";

  async function copyBuildTemplate() {
    notify_info("Generating build template...");

    const response = await encodeBuildTemplate(
      profession,
      secondary_profession,
      new Map(build.map((skill, i) => [i, { skill, profession }])),
      attributes
    );

    let message = `${capitalize(profession)}`;

    if (secondary_profession !== "none") {
      message += `/${capitalize(secondary_profession)}`;
    }

    const elite = build.find((s) => s.options.is_elite);
    if (elite) {
      message += ` - ${elite.name}`;
    }

    navigator.clipboard.writeText(`[${message};${response.code}]`);

    notify_info("Build template copied.");
  }

  async function copyBuildTemplateCode() {
    notify_info("Generating build template code...");

    const response = await encodeBuildTemplate(
      profession,
      secondary_profession,
      new Map(build.map((skill, i) => [i, { skill, profession }])),
      attributes
    );

    navigator.clipboard.writeText(response.code);

    notify_info("Build template code copied.");
  }
</script>

<div class="hero-skillbar">
  {#each build as skill}
    <SkillIcon {skill} compact={$store_compact_icons} />
  {/each}

  <button on:click={copyBuildTemplate} title="Generate & copy build template">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  </button>

  <button
    on:click={copyBuildTemplateCode}
    title="Generate & copy build template code">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  </button>
</div>

<style>
  .hero-skillbar {
    display: flex;
    align-items: center;
    padding: 1em;
  }

  button {
    margin-left: 1em;
    box-shadow: 0px 0px 6px rgba(20, 20, 20, 0.15);
  }
</style>
