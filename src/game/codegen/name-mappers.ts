/**
 * transforms a skill name from the `skill.ts` list of skill to a name that
 * can be displayed to the user on the UI.
 */
export function toDisplay(str: string) {
  return str
    .trimStart()
    .replace("/wiki/File:", "")
    .replace("(large).png", "")
    .replace("(large).jpg", "")
    .replaceAll("%20", " ")
    .replaceAll("%22", '"')
    .replaceAll("%27", "'")
    .replaceAll("_", " ")
    .trim();
}

/**
 * transforms a skill name from the `skill.ts` list of skill to a name that
 * is short but unique so it can be used in HashSets
 */
export function toNormalized(str: string) {
  return toDisplay(str)
    .replaceAll("_", " ")
    .replaceAll("-s ", "'s")
    .replaceAll("'s", "s ")
    .replaceAll("  ", " ")
    .replaceAll("-", "")
    .replaceAll("_", " ")
    .replaceAll('"', "")
    .replaceAll("'", "")
    .replaceAll("!", "")
    .replaceAll(",", "")
    .replaceAll(".jpg", "##jpg##")
    .replaceAll(".", "")
    .replaceAll("##jpg##", ".jpg")
    .toLowerCase()
    .trim();
}

export function toIcon(str: string) {
  return toNormalized(str) + ".webp";
}
