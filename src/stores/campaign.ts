import { writable } from "svelte/store";
import {
  getSelectedCampaignLs,
  setSelectedCampaignLs,
} from "../localstorage/selected_campaign";

export type Campaign = "Prophecy" | "Faction" | "Nightfall" | "GWEN";

export const store_campaign = writable<Campaign>(getSelectedCampaignLs());

store_campaign.subscribe(setSelectedCampaignLs);
