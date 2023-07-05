import { toNormalized } from "../game/codegen/name-mappers";
import { profession_names_to_id } from "../game/codegen/profession-to-id";
import { skill_names_to_id } from "../game/codegen/skill-name-to-id";
import type { Profession, SecondaryProfession } from "../game/professions";
import type { Skillbar } from "../stores/skillbar";

export async function encodeBuildTemplate(
  primary: Profession,
  secondary: SecondaryProfession,
  skillbar: Skillbar
) {
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

  const body = {
    attributes: [],
    primaryProfession: profession_names_to_id.get(primary),
    secondaryProfession: profession_names_to_id.get(secondary),
    skills,
  };

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
