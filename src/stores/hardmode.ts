import { writable } from "svelte/store";
import { getHardmodeLs, setHardmodeLs } from "../localstorage/hardmode";

export const store_hardmode = writable(getHardmodeLs());

store_hardmode.subscribe(setHardmodeLs);