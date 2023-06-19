import { canStore } from ".";

const KEY = "HENCHMEN_COUNT";

export function setHenchmenCountLs(count: number) {
  return canStore() && localStorage.setItem(KEY, String(count));
}

export function getHenchmenCountLs(): number {
  return Number(localStorage.getItem(KEY) || "0");
}
