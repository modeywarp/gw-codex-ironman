import { canStore } from ".";
import { getOutpostByLink, type Outpost } from "../game/outposts";

const KEY = "SELECTED_OUTPOST_LINK";

export function setSelectedOutpostLs(outpost: Outpost) {
  return canStore() && localStorage.setItem(KEY, outpost.link);
}

export function getSelectedOutpostLs(): Outpost {
  let link: Outpost["link"] = localStorage.getItem(KEY) || "";

  return getOutpostByLink(link);
}
