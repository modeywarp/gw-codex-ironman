import { writable } from "svelte/store";

import * as outposts from "../game/outposts";
import campaign_store from "./campaign";

const STORE = writable<outposts.RegionDatabase>(outposts.pre_searing);
export default STORE;

campaign_store.subscribe((campaign) => {
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
