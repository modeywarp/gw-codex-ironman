import type { SkillsetEntry } from "../../stores/builds";
import {
  attributes_by_profession,
  type Attribute,
} from "../codegen/attributes";
import { all_weapon_attributes } from "../codegen/attributes/martial-weapon-attributes";
import type { Outpost } from "../outposts";
import type { Profession, SecondaryProfession } from "../professions";
import { Rng } from "../rng";
import database from "../skills";
import { getHighestPossibleForAttributePoints } from "./attribute-tree";

export type AttributesTree = Map<Attribute, number>;

export type SuggestedAttributeBars = SkillsetEntry[][];

export type AttributesSkillset = {
  attributes: AttributesTree;
  suggested_bars: SuggestedAttributeBars;
};

/**
 * @todo exception on martial professions to have at least & at most one martial
 * attribute, ranger having beast-mastery & marksmanship as martial attributes
 */
export function generateAttributeSet(
  character_name: string,
  outpost: Outpost,
  primary: Profession,
  secondary: SecondaryProfession,
  level: number
): AttributesSkillset {
  const rng = new Rng(
    `${character_name.toLowerCase()}-${outpost.link}-${primary}`
  );

  /**
   * available attributes sorted by priority, from most important to least
   * important.
   */
  const available_attributes = [getAvailableAttributes(rng, primary, secondary)]
    .map((attrs) => getShuffledAttributes(rng, attrs))
    .map(excludeExtraWeaponAttributes)
    .map((attrs) => moveWeaponAttributeFirst(rng, attrs))
    .at(0);

  const output: Map<Attribute, number> = new Map();

  let attr_index = 0;
  let available_points = level * 10;

  for (let i = 0; i < 2; i += 1) {
    if (!available_attributes[attr_index]) {
      break;
    }

    let attr_investment = getHighestPossibleForAttributePoints(
      available_points,
      12 - rng.nextRange(3)
    );
    let attr_highest = attr_investment.level;
    available_points = attr_investment.points_left;
    output.set(available_attributes[attr_index], attr_highest);
    attr_index += 1;
  }

  for (let i = 0; i < 2; i += 1) {
    if (!available_attributes[attr_index]) {
      break;
    }

    let attr_investment = getHighestPossibleForAttributePoints(
      available_points,
      10 - rng.nextRange(3)
    );
    let attr_highest = attr_investment.level;
    available_points = attr_investment.points_left;

    if (attr_highest > 0) {
      output.set(available_attributes[attr_index], attr_highest);
    }

    attr_index += 1;
  }

  return {
    attributes: output,
    suggested_bars: generateSuggestedSkillbars(rng, output, primary, secondary),
  };
}

function getAvailableAttributes(
  rng: Rng,
  primary: Profession,
  secondary: SecondaryProfession
): Set<Attribute> {
  const available_attributes = new Set(attributes_by_profession.get(primary));

  if (secondary !== "none") {
    // attributes from the secondary profession with its primary attribute
    // excluded:
    const secondary_attributes = attributes_by_profession
      .get(secondary)
      .slice(1);

    const attrs = Array.from(available_attributes.values());
    const attribute_to_replace = attrs.at(rng.nextRange(attrs.length));
    const attribute_to_use = secondary_attributes.at(
      rng.nextRange(secondary_attributes.length)
    );

    available_attributes.delete(attribute_to_replace);
    available_attributes.add(attribute_to_use);
  }

  return available_attributes;
}

function getShuffledAttributes(
  rng: Rng,
  attributes: Set<Attribute>
): Attribute[] {
  const array = Array.from(attributes.values());

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(rng.next() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

function excludeExtraWeaponAttributes(attributes: Attribute[]): Attribute[] {
  const set = new Set(attributes);
  const output = [];

  let has_martial = false;
  for (const attribute of attributes) {
    if (all_weapon_attributes.has(attribute)) {
      if (has_martial) {
        continue;
      }

      has_martial = true;
    }

    output.push(attribute);
  }

  return output;
}

function moveWeaponAttributeFirst(
  rng: Rng,
  attributes: Attribute[]
): Attribute[] {
  const old_index = attributes.findIndex((attr) =>
    all_weapon_attributes.has(attr)
  );

  // the weapon attribute is already in the first 2 attributes so there is
  //nothing to change.
  if (old_index <= 1) {
    return attributes;
  }

  const new_index = rng.nextRange(2);
  const [left, right] = [attributes.at(new_index), attributes[old_index]];

  attributes[new_index] = right;
  attributes[old_index] = left;

  return attributes;
}

function generateSuggestedSkillbars(
  rng: Rng,
  tree: AttributesTree,
  primary: Profession,
  secondary: SecondaryProfession
): SuggestedAttributeBars {
  const common_list_of_skills = database
    .get(primary)
    .concat(secondary !== "none" ? database.get(secondary) : []);
  const attributes = Array.from(tree.keys());
  const common_bar = attributes.map((attribute) => {
    const skills_for_attribute = common_list_of_skills.filter(
      (skill) => skill.options.attribute === attribute
    );

    const non_elites = skills_for_attribute.filter((s) => !s.options.is_elite);

    console.log(non_elites, attribute, skills_for_attribute);

    return {
      skills_for_attribute,
      selected_skill: non_elites[rng.nextRange(non_elites.length)],
    };
  });

  const output = attributes.map((_, elite_position) =>
    common_bar
      .map((obj, i) => {
        const elites_for_attribute = obj.skills_for_attribute.filter(
          (s) => s.options.is_elite
        );

        return i === elite_position
          ? elites_for_attribute[rng.nextRange(elites_for_attribute.length)]
          : obj.selected_skill;
      })
      .map((s) => ({ disabled: false, ...s }))
  );

  return output;
}
