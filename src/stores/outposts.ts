import { get, writable } from "svelte/store";

import * as outposts from "../game/outposts";
import { store_campaign } from "./campaign";
import {
  getSelectedOutpostLs,
  setSelectedOutpostLs,
} from "../localstorage/selected_outpost";
import { getOutpostCampaign } from "../game/outposts";
import { getOutpostFromUrl } from "../history";
import { canStore, isPreview } from "../localstorage";

export const store_outposts = writable<outposts.RegionDatabase>(
  outposts.prophecy
);

export const store_selected_outpost = writable<outposts.Outpost>(
  getOutpostFromUrl() ||
    getSelectedOutpostLs() ||
    outposts.prophecy[0].outposts[0]
);

export const store_suggested_outposts = writable<outposts.Outpost[]>([]);
store_selected_outpost.subscribe((o) => {
  store_suggested_outposts.set(outposts.getSuggestedOutposts(o));
});

store_campaign.subscribe((campaign) => {
  const can_switch_selected_outpost =
    campaign !== getOutpostCampaign(get(store_selected_outpost));

  switch (campaign) {
    case "Prophecies":
      store_outposts.set(outposts.prophecy);

      if (can_switch_selected_outpost) {
        store_selected_outpost.set(outposts.prophecy[0].outposts[0]);
      }
      break;
    case "Factions":
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

const broadcast_channel = new BroadcastChannel("selected-outpost");
store_selected_outpost.subscribe((outpost) => {
  setSelectedOutpostLs(outpost);

  if (!isPreview()) {
    broadcast_channel.postMessage({
      outpost_link: outpost.link,
      campaign: get(store_campaign),
    });
  }
});

broadcast_channel.onmessage = (event) => {
  if (!isPreview()) {
    return;
  }

  const { outpost_link, campaign } = event.data;
  store_campaign.set(campaign);

  setTimeout(() => {
    const outpost = outposts.getOutpostByLink(outpost_link);

    store_selected_outpost.set(outpost);
  }, 100);
};
