import { get, writable } from "svelte/store";
import { store_campaign, type Campaign } from "./campaign";
import type { SkillOrigin } from "../game/codegen/subgroups/campaigns";
import {
  store_primary_profession,
  store_secondary_profession,
} from "./character";
import type { Profession } from "../game/professions";
import {
  getSelectedSkillpacksLs,
  setSelectedSkillpacksLs,
} from "../localstorage/skillpacks";
import { getSkillpacksFromUrl } from "../history";

export const store_selected_skillpacks = writable<SkillOrigin[]>(
  getSkillpacksFromUrl() || getSelectedSkillpacksLs() || ["Core"]
);

function getRecommendedSkillPacksForCampaign(
  campaign: Campaign
): SkillOrigin[] {
  if (campaign == "Prophecy") {
    return ["Core", "Prophecy"];
  }

  if (campaign == "Faction") {
    return ["Core", "Faction"];
  }

  if (campaign == "Nightfall") {
    return ["Core", "Nightfall"];
  }

  if (campaign == "GWEN") {
    return ["Core", "Prophecy", "Faction", "Nightfall", "GWEN"];
  }

  return ["Core"];
}

function getRecommendedSkillPacksForProfession(
  profession: Profession
): SkillOrigin[] {
  if (profession === "assassin" || profession === "ritualist") {
    return ["Faction"];
  }

  if (profession === "dervish" || profession === "paragon") {
    return ["Nightfall"];
  }

  return [];
}

export function refreshSkillpacks() {
  const secondary_profession = get(store_secondary_profession);

  const recommended_packs = get(store_selected_skillpacks)
    .concat(getRecommendedSkillPacksForCampaign(get(store_campaign)))
    .concat(
      getRecommendedSkillPacksForProfession(get(store_primary_profession))
    )
    .concat(
      secondary_profession !== "none"
        ? getRecommendedSkillPacksForProfession(secondary_profession)
        : []
    );

  const unique = Array.from(new Set(recommended_packs));

  store_selected_skillpacks.set(unique);
}

store_selected_skillpacks.subscribe((packs) => {
  setSelectedSkillpacksLs(packs);
});
