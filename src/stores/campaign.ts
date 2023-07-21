import { writable } from "svelte/store";
import {
  getSelectedCampaignLs,
  setSelectedCampaignLs,
} from "../localstorage/selected_campaign";
import { getCampaignFromUrl } from "../history";

export type Campaign = "Prophecies" | "Factions" | "Nightfall" | "GWEN";

export const store_campaign = writable<Campaign>(
  getCampaignFromUrl() || getSelectedCampaignLs()
);

store_campaign.subscribe(setSelectedCampaignLs);
