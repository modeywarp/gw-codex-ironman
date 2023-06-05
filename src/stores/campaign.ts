import { writable } from "svelte/store";

export type Campaign = "Pre-Searing" | "Prophecy" | "Faction" | "Nightfall";

const STORE = writable<Campaign>("Pre-Searing");
export default STORE;
