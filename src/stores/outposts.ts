import { get, writable } from "svelte/store";

import * as outposts from "../game/outposts";
import { store_campaign } from "./campaign";
import {
  getSelectedOutpostLs,
  setSelectedOutpostLs,
} from "../localstorage/selected_outpost";
import { getOutpostCampaign } from "../game/outposts";

export const store_outposts = writable<outposts.RegionDatabase>(
  outposts.pre_searing
);

export const store_selected_outpost = writable<outposts.Outpost>(
  getSelectedOutpostLs()
);

export const store_suggested_outposts = writable<outposts.Outpost[]>([]);
store_selected_outpost.subscribe((o) => {
  store_suggested_outposts.set(outposts.getSuggestedOutposts(o));
});

store_campaign.subscribe((campaign) => {
  const can_switch_selected_outpost =
    campaign !== getOutpostCampaign(get(store_selected_outpost));

  switch (campaign) {
    case "Prophecy":
      store_outposts.set(outposts.prophecy);

      if (can_switch_selected_outpost) {
        store_selected_outpost.set(outposts.prophecy[0].outposts[0]);
      }
      break;
    case "Faction":
      store_outposts.set(outposts.faction);

      if (can_switch_selected_outpost) {
        store_selected_outpost.set(outposts.faction[0].outposts[0]);
      }
      break;
    case "Nightfall":
      store_outposts.set(outposts.nightfall);

      if (can_switch_selected_outpost) {
        store_selected_outpost.set(outposts.nightfall[0].outposts[0]);
      }
      break;
  }
});

store_selected_outpost.subscribe(setSelectedOutpostLs);
