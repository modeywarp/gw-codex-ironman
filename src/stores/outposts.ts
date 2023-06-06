import { writable } from "svelte/store";

import * as outposts from "../game/outposts";
import { store_campaign } from "./campaign";

export const store_outposts = writable<outposts.RegionDatabase>(
  outposts.pre_searing
);

export const store_selected_outpost = writable<outposts.Outpost>(
  outposts.all_outposts[0]
);

export const store_suggested_outposts = writable<outposts.Outpost[]>([]);
store_selected_outpost.subscribe((o) => {
  store_suggested_outposts.set(outposts.getSuggestedOutposts(o));
});

store_campaign.subscribe((campaign) => {
  switch (campaign) {
    case "Pre-Searing":
      store_outposts.set(outposts.pre_searing);
      store_selected_outpost.set(outposts.pre_searing[0].outposts[0]);
      break;
    case "Prophecy":
      store_outposts.set(outposts.prophecy);
      store_selected_outpost.set(outposts.prophecy[0].outposts[0]);
      break;
    case "Faction":
      store_outposts.set(outposts.faction);
      store_selected_outpost.set(outposts.faction[0].outposts[0]);
      break;
    case "Nightfall":
      store_outposts.set(outposts.nightfall);
      store_selected_outpost.set(outposts.nightfall[0].outposts[0]);
      break;
  }
});
