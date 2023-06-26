import type { Profession } from "../professions";

const pairs: Array<{ id: number, value: Profession | "none" }> = [
  { id: 0, value: "none" },
  { id: 1, value: "warrior" },
  { id: 2, value: "ranger" },
  { id: 3, value: "monk" },
  { id: 4, value: "necromancer" },
  { id: 5, value: "mesmer" },
  { id: 6, value: "elementalist" },
  { id: 7, value: "assassin" },
  { id: 8, value: "ritualist" },
  { id: 9, value: "paragon" },
  { id: 10, value: "dervish" },
];


export const profession_names_to_id = new Map(
  pairs.map((pair) => [pair.value, pair.id])
);
export const profession_ids_to_name = new Map(
  pairs.map((pair) => [pair.id, pair.value])
);
