import { canStore } from ".";
import type { Skillbar } from "../stores/skillbar";

const KEY = "SKILLBAR";

export function setSkillbarLs(skillbar: Skillbar) {
  return canStore() && localStorage.setItem(KEY, JSON.stringify(Array.from(skillbar.entries())));
}

export function getSkillbarLs(): Skillbar | null {
  const item = localStorage.getItem(KEY);

  if (!item) {
    return null;
  }

  return new Map(JSON.parse(item));
}
