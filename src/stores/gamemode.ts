import { writable } from "svelte/store";
import { getGamemodeLs, setGamemodeLs } from "../localstorage/gamemode";

export type GameMode = "normal" | "hard" | "attributes";

export const store_gamemode = writable<GameMode>(getGamemodeLs());

store_gamemode.subscribe(setGamemodeLs);
