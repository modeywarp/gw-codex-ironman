import { canStore } from ".";

const KEY = "PLAYERS_COUNT";

export function setPlayersCountLs(count: number) {
  return canStore() && localStorage.setItem(KEY, String(count));
}

export function getPlayersCountLs(): number {
  return Number(localStorage.getItem(KEY) || "0");
}
