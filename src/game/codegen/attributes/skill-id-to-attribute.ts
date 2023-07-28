import { formatAttributeName, type Attribute } from ".";
import { skill_names_to_id } from "../skill-name-to-id";
import { skills_database_json } from "../skills-database-json";

export function getSkillAttribute(id: number): Attribute | null {
  if (!skills_database_json[id]) {
    return null;
  }

  const attribute = skills_database_json[id].attribute;

  if (attribute === null) {
    return null;
  }

  return formatAttributeName(skills_database_json[id].attribute) || null;
}

export function getSkillAttributeByName(name: string): Attribute | null {
  return getSkillAttribute(skill_names_to_id.get(name));
}
