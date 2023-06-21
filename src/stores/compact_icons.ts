import { writable } from "svelte/store";
import { getCompactIconsLs, setCompactIconsLs } from "../localstorage/compact_icons";

export const store_compact_icons = writable(getCompactIconsLs());

store_compact_icons.subscribe(setCompactIconsLs);
