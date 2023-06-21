import { canStore } from ".";

const KEY = "COMPACT_ICON";

export function setCompactIconsLs(enabled: boolean) {
  if (!canStore()) {
    return;
  }

  if (enabled) {
    localStorage.setItem(KEY, "");
  }
  else {
    localStorage.removeItem(KEY);
  }
}

export function getCompactIconsLs(): boolean {
  return localStorage.getItem(KEY) !== null;
}
