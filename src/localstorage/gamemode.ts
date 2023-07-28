import { canStore } from ".";
import type { GameMode } from "../stores/gamemode";

const KEY = "GAMEMODE";

export function setGamemodeLs(mode: GameMode) {
  if (!canStore()) {
    return;
  }

  localStorage.setItem(KEY, mode);
}

export function getGamemodeLs(): GameMode {
  return (localStorage.getItem(KEY) as GameMode) || "normal";
}
