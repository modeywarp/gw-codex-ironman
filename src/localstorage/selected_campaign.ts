import { isInPreview } from ".";
import type { Campaign } from "../stores/campaign";

const KEY = "SELECTED_CAMPAIGN";

export function setSelectedCampaignLs(campaign: Campaign) {
  return isInPreview() && localStorage.setItem(KEY, campaign);
}

export function getSelectedCampaignLs(): Campaign {
  return (localStorage.getItem(KEY) as Campaign) || "Prophecy";
}
