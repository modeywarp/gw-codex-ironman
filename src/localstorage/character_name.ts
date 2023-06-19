import { isInPreview } from ".";

const KEY = "CHARACTER_NAME";

export function setCharacterNameLs(name: string) {
  return isInPreview() && localStorage.setItem(KEY, name);
}

export function getCharacterNameLs(): string {
  return localStorage.getItem(KEY) || "";
}
