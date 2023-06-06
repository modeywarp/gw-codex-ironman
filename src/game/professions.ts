export type Profession =
  | "warrior"
  | "ranger"
  | "monk"
  | "elementalist"
  | "necromancer"
  | "mesmer"
  | "assassin"
  | "ritualist"
  | "dervish"
  | "paragon";

export type SecondaryProfession = Profession | "none";

export const all_professions: Profession[] = [
  "warrior",
  "ranger",
  "monk",
  "elementalist",
  "necromancer",
  "assassin",
  "ritualist",
  "dervish",
  "paragon",
];
