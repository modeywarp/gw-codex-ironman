import { writable } from "svelte/store";

export type Campaign =
  | "Pre-Searing"
  | "Prophecy"
  | "Faction"
  | "Nightfall"
  | "Gwen";

export const store_campaign = writable<Campaign>("Pre-Searing");
