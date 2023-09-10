<script lang="ts">
  import {
    encodeBuildTemplates,
    type buildTemplateParams,
  } from "../../api/decodetemplate";
  import { skillsetEntriesToSingleProfessionSkillbar } from "../../game/buildgen/build_generator";
  import { generateHeroBuilds } from "../../game/buildgen/heroes";
  import { getRegionForOutpost } from "../../game/outposts";
  import { all_professions, type Profession } from "../../game/professions";
  import { store_character_name } from "../../stores/character";
  import { store_selected_outpost } from "../../stores/outposts";
  import BuildsPreview from "./BuildsPreview.svelte";

  const professions = all_professions;

  let selected_profession: Profession | null = null;

  $: selected_region = getRegionForOutpost($store_selected_outpost);

  // github pages aren't hosted on a domain's root, each repository is in a sub
  // folder, so this is a way to get icons to load once pushed to production.
  const image_root = import.meta.env.PROD ? import.meta.env.BASE_URL : "";

  async function generateTemplateZipFile() {
    //@ts-ignore
    const zip = new JSZip();
    const templates = zip.folder(`Codex - ${selected_region.name}`);

    const builds = professions
      .map((profession) =>
        generateHeroBuilds(
          $store_character_name,
          profession,
          selected_region
        ).map((build) => ({ profession, build }))
      )
      .flatMap((x) => x);

    const params: buildTemplateParams[] = builds.map((o) => ({
      primary: o.profession,
      secondary: "none",
      skillbar: skillsetEntriesToSingleProfessionSkillbar(
        o.profession,
        o.build
      ),
      attributes: null,
    }));
    const template_codes = await encodeBuildTemplates(params);

    for (const prof of professions) {
      const folder = templates.folder(String(prof));
      const elites_number = new Map();

      for (let i = 0; i < builds.length; i += 1) {
        const { build, profession } = builds[i];

        if (profession === prof) {
          const elite = build.find((s) => s.options.is_elite);
          const template_code = template_codes[i];

          // get the name of the build, if there is already a build
          // with this elite then add a number suffix to it.
          const build_name =
          elite.name.replace(/[^a-z0-9 ]/gi, "") ?? profession;
          const build_number = elites_number.get(build_name) || 0;
          const numbered_build_name = build_number > 0
             ? `${build_name} - ${build_number}`
             : build_name;

          // add the number for the elite + 1 so the next time it
          // is used it starts from that number
          elites_number.set(build_name, build_number + 1);

          folder.file(`${numbered_build_name}.txt`, template_code.code);
        }
      }
    }

    const content = await zip.generateAsync({ type: "blob" });

    //@ts-ignore
    startDownload(content, `Codex ${selected_region.name} - Hero builds`);
  }

  function startDownload(content: any, filename: string) {
    var tag = document.createElement("a");
    tag.download = filename;
    tag.href = URL.createObjectURL(content);
    tag.dataset.downloadurl = ["zip", tag.download, tag.href].join(":");
    tag.style.display = "none";
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
    setTimeout(function () {
      URL.revokeObjectURL(tag.href);
    }, 1500);
  }
</script>

<div class="hero-builds">
  <h1>Hero builds - {selected_region.name}</h1>

  <div class="profession-selector">
    {#each professions as profession}
      <button on:click={() => (selected_profession = profession)}
        ><img
          src={`${image_root}/profession-icons/${profession}.png`}
          alt={`${profession} icon`} /></button>
    {/each}

    <button on:click={() => (selected_profession = null)}
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12" />
      </svg></button>

    <button
      on:click={generateTemplateZipFile}
      title="Generate & copy template folder with all hero builds">
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
          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    </button>
  </div>

  {#if selected_profession !== null}
    <BuildsPreview profession={selected_profession} region={selected_region} />
  {/if}
</div>

<style>
  .hero-builds {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profession-selector {
    display: flex;
    align-items: center;
  }
  .profession-selector button {
    margin: 0.2em;
  }
</style>
