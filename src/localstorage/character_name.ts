import { canStore } from ".";

const KEY = "CHARACTER_NAME";

export function setCharacterNameLs(name: string) {
  return canStore() && localStorage.setItem(KEY, name);
}

export function getCharacterNameLs(): string {
  return localStorage.getItem(KEY) || "";
}
