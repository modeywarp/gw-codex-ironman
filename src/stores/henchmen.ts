import { writable } from "svelte/store";
import {
  getHenchmenCountLs,
  setHenchmenCountLs,
} from "../localstorage/henchmen_count";

export const store_henchmen_count = writable(getHenchmenCountLs());

store_henchmen_count.subscribe((count) => {
  setHenchmenCountLs(count);
});
