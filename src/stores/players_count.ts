import { writable } from "svelte/store";
import { getPlayersCountLs, setPlayersCountLs } from "../localstorage/players_count";

export const store_players_count = writable(getPlayersCountLs());

store_players_count.subscribe((count) => {
  setPlayersCountLs(count);
});
