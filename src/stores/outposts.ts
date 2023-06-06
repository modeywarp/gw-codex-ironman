import { writable } from "svelte/store";

import * as outposts from "../game/outposts";
import { store_campaign } from "./campaign";

const STORE = writable<outposts.RegionDatabase>(outposts.pre_searing);
export default STORE;

store_campaign.subscribe((campaign) => {
  switch (campaign) {
    case "Pre-Searing":
      STORE.set(outposts.pre_searing);
      break;
    case "Prophecy":
      STORE.set(outposts.prophecy);
      break;
    case "Faction":
      STORE.set(outposts.faction);
      break;
    case "Nightfall":
      STORE.set(outposts.nightfall);
      break;
  }
});

export const store_selected_outpost = writable<outposts.Outpost>(
  outposts.pre_searing[0].outposts[0]
);
