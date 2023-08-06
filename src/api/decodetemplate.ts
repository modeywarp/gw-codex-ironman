import type { AttributesTree } from "../game/attributegen";
import { attribute_name_to_id } from "../game/codegen/attributes/attribute-name-to-id";
import { getSkillAttribute } from "../game/codegen/attributes/skill-id-to-attribute";
import { toNormalized } from "../game/codegen/name-mappers";
import { profession_names_to_id } from "../game/codegen/profession-to-id";
import { skill_names_to_id } from "../game/codegen/skill-name-to-id";
import type { Profession, SecondaryProfession } from "../game/professions";
import type { Skillbar } from "../stores/skillbar";

export type buildTemplateParams = {
  primary: Profession;
  secondary: SecondaryProfession;

  /**
   * @todo this shouldn't be a Skillbar but rather an array of SkillsetEntry.
   *
   * The fact it's a skillbar forces us to transform arrays of skills into a
   * skillbar which then gets converted back to an array of skills afterward...
   */
  skillbar: Skillbar;
  attributes: AttributesTree | null;
};

export type EncodeResponse = {
  code: string;
};

export async function encodeBuildTemplate(params: buildTemplateParams) {
  const body = makeEncodeBody(params);

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const response = await fetch(
    "https://guildwars-decodetemplate.azurewebsites.net/api/Encode",
    {
      method: "post",
      body: JSON.stringify(body),
      headers,
    }
  );

  return await response.json();
}

export async function encodeBuildTemplates(
  params: buildTemplateParams[]
): Promise<EncodeResponse[]> {
  const body = params.map(makeEncodeBody);

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const response = await fetch(
    "https://guildwars-decodetemplate.azurewebsites.net/api/EncodeMultiple",
    {
      method: "post",
      body: JSON.stringify(body),
      headers,
    }
  );

  return await response.json();
}

function makeEncodeBody(params: buildTemplateParams) {
  const { primary, secondary, skillbar, attributes = null } = params;

  const skills = [0, 1, 2, 3, 4, 5, 6, 7]
    .map((slot) => skillbar.get(slot))
    .map((entry) => {
      if (!entry) {
        return 0;
      }

      if (entry.skill.disabled) {
        return 0;
      }

      return skill_names_to_id.get(toNormalized(entry.skill.name)) || 0;
    });

  const generated_attributes =
    attributes === null
      ? [skills]
          .map((skills) =>
            Array.from(
              new Set(
                skills
                  .map(getSkillAttribute)
                  .filter(Boolean)
                  .map((n) => attribute_name_to_id.get(n))
              )
            )
          )
          .map((attributes) =>
            attributes.map((attr) => ({ id: attr, level: 9 }))
          )
          .at(0)
      : Array.from(attributes.entries()).map(([id, level]) => ({
          id: attribute_name_to_id.get(id),
          level,
        }));

  return {
    attributes: generated_attributes,
    primaryProfession: profession_names_to_id.get(primary),
    secondaryProfession: profession_names_to_id.get(secondary),
    skills,
  };
}
