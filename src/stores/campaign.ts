import { writable } from "svelte/store";
import { store_selected_outpost } from "./outposts";

export type Campaign =
  | "Pre-Searing"
  | "Prophecy"
  | "Faction"
  | "Nightfall"
  | "Gwen";

export const store_campaign = writable<Campaign>("Pre-Searing");
