import { canStore } from ".";

const KEY = "COMPACT_ICON";

export function setCompactIconsLs(enabled: boolean) {
  return canStore() && localStorage.setItem(KEY, String(enabled));
}

export function getCompactIconsLs(): boolean {
  return Boolean(localStorage.getItem(KEY));
}
