import { get, writable } from "svelte/store";
import type { SkillsetEntry } from "./builds";
import type { Profession } from "../game/professions";
import store_builds from "./builds";

export interface SkillbarEntry {
  skill: SkillsetEntry,
  profession: Profession
};

export type Skillbar = Map<number, SkillbarEntry>;

export const store_skillbar = writable<Skillbar>(new Map());

export function addSkilltoSkillbar(slot: number, skill: SkillsetEntry, profession: Profession) {
  if (slot < 0 || slot > 7) {
    return;
  }

  if (skill.disabled) {
    return;
  }

  store_skillbar.update(map => {
    map = _removeSkillFromSkillbar(map, skill);

    if (skill.options.is_elite) {
      const existing_elite_slot = getEliteSkillSlot(map);

      if (existing_elite_slot > -1) {
        map.delete(existing_elite_slot);
      }
    }

    map.set(slot, { skill, profession });

    return map;
  })
}

export function removeSkillFromSkillbar(skill: SkillsetEntry) {
  store_skillbar.subscribe(map => _removeSkillFromSkillbar(map, skill))
}

function _removeSkillFromSkillbar(map: Skillbar, skill) {
  const slot = _getSkillSlot(map, skill);

  if (slot > -1) {
    map.delete(slot);
  }

  return map;
}

function getEliteSkillSlot(map: Skillbar): number {
  const entry = Array.from(map.entries())
    .find(([slot, entry]) => entry.skill.options.is_elite);

  if (entry) {
    return entry[0];
  }

  return -1;
}

export function getSkillSlot(skill: SkillsetEntry): number {
  return _getSkillSlot(get(store_skillbar), skill);
}

function _getSkillSlot(map: Skillbar, skill: SkillsetEntry): number {
  const entry = Array.from(map.entries())
    .find(([index, s]) => skill.link === s.skill.link);

  if (entry) {
    return entry[0];
  }

  return -1;
}

export function removeAllSkillsFromSkillbar() {
  store_skillbar.update(bar => {
    bar.clear();

    return bar;
  })
}

store_builds.subscribe(builds => {
  if (!builds) {
    return;
  }


  store_skillbar.update(skillbar => {
    for (const entry of skillbar.values()) {
      // remove the skill since its profession isn't in the selected professions
      // anymore
      if (!builds.has(entry.profession)) {
        skillbar = _removeSkillFromSkillbar(skillbar, entry.skill);

        continue;
      }

      // remove the skill because it couldn't be found as enabled in the
      // generated builds
      const skill = Array.from(builds.values())
        .flatMap(s => Array.from(s.values()))
        .find(s => !s.disabled && s.link == entry.skill.link);

      if (!skill) {
        skillbar = _removeSkillFromSkillbar(skillbar, entry.skill);
      }
    }

    return skillbar;
  });
});
