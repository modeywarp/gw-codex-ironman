import { canStore } from ".";
import type { SkillOrigin } from "../game/codegen/subgroups/campaigns";
import { getOutpostByLink, type Outpost } from "../game/outposts";

const KEY = "SELECTED_SKILLPACKS";

export function setSelectedSkillpacksLs(skillpacks: SkillOrigin[]) {
  return canStore() && localStorage.setItem(KEY, skillpacks.join(","));
}

export function getSelectedSkillpacksLs(): SkillOrigin[] {
  return (localStorage.getItem(KEY) || "").split(",") as SkillOrigin[];
}
