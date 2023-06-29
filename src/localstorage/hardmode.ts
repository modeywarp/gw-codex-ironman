import { canStore } from ".";

const KEY = "HARDMODE";

export function setHardmodeLs(enabled: boolean) {
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

export function getHardmodeLs(): boolean {
  return localStorage.getItem(KEY) !== null;
}
