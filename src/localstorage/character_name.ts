const KEY = "CHARACTER_NAME";

export function setCharacterNameLs(name: string) {
  return localStorage.setItem(KEY, name);
}

export function getCharacterNameLs(): string {
  return localStorage.getItem(KEY) || "";
}
