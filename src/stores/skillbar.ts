import { get, writable } from "svelte/store";
import type { SkillsetEntry } from "./builds";
import type { Profession } from "../game/professions";
import store_builds from "./builds";
import { getSkillbarLs, setSkillbarLs } from "../localstorage/skillbar";

export interface SkillbarEntry {
  skill: SkillsetEntry;
  profession: Profession;
}

export type Skillbar = Map<number, SkillbarEntry>;

export const store_skillbar = writable<Skillbar>(getSkillbarLs() || new Map());

export function addSkilltoSkillbar(
  slot: number,
  skill: SkillsetEntry,
  profession: Profession
) {
  if (slot < 0 || slot > 7) {
    return;
  }

  if (skill.disabled) {
    return;
  }

  store_skillbar.update((map) => {
    // the slot the skill we're trying to equip may already have, if the skill
    // is already present on the bar then the value will be anything from 0 to 7
    // otherwise it is -1
    const skill_existing_slot = getSkillSlot(skill);

    // perform a skill swap
    if (map.has(slot) && skill_existing_slot >= 0) {
      const skill_in_slot = map.get(slot);

      map.set(slot, { skill, profession });
      map.set(skill_existing_slot, skill_in_slot);
    }
    // perform a regular skill insert
    else {
      if (skill.options.is_elite) {
        const existing_elite_slot = getEliteSkillSlot(map);

        if (existing_elite_slot > -1) {
          map.delete(existing_elite_slot);
        }
      }

      map.set(slot, { skill, profession });
    }

    return map;
  });
}

export function removeSkillFromSkillbar(skill: SkillsetEntry) {
  store_skillbar.subscribe((map) => _removeSkillFromSkillbar(map, skill));
}

function _removeSkillFromSkillbar(map: Skillbar, skill) {
  const slot = _getSkillSlot(map, skill);

  if (slot > -1) {
    map.delete(slot);
  }

  return map;
}

export function removeSkillFromSkillslot(slot: number) {
  store_skillbar.update((bar) => {
    bar.delete(slot);

    return bar;
  });
}

function getEliteSkillSlot(map: Skillbar): number {
  const entry = Array.from(map.entries()).find(
    ([slot, entry]) => entry.skill.options.is_elite
  );

  if (entry) {
    return entry[0];
  }

  return -1;
}

export function getSkillSlot(skill: SkillsetEntry): number {
  return _getSkillSlot(get(store_skillbar), skill);
}

function _getSkillSlot(map: Skillbar, skill: SkillsetEntry): number {
  const entry = Array.from(map.entries()).find(
    ([index, s]) => skill.link === s.skill.link
  );

  if (entry) {
    return entry[0];
  }

  return -1;
}

export function removeAllSkillsFromSkillbar() {
  store_skillbar.update((bar) => {
    bar.clear();

    return bar;
  });
}

store_builds.subscribe((builds) => {
  if (!builds) {
    return;
  }

  store_skillbar.update((skillbar) => {
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
        .flatMap((s) => Array.from(s.values()))
        .find((s) => !s.disabled && s.link == entry.skill.link);

      if (!skill) {
        skillbar = _removeSkillFromSkillbar(skillbar, entry.skill);
      }
    }

    return skillbar;
  });
});

store_skillbar.subscribe(setSkillbarLs);
