import { assassin_elites } from "./assassin";
import { dervish_elites } from "./dervish";
import { elementalist_elites } from "./elementalist";
import { mesmer_elites } from "./mesmer";
import { monk_elites } from "./monk";
import { necromancer_elites } from "./necromancer";
import { paragon_elites } from "./paragon";
import { ranger_elites } from "./ranger";
import { ritualist_elites } from "./ritualist";
import { warrior_elites } from "./warrior";

export const all_elites = new Set(
  warrior_elites
    .concat(ranger_elites)
    .concat(monk_elites)
    .concat(necromancer_elites)
    .concat(elementalist_elites)
    .concat(mesmer_elites)
    .concat(assassin_elites)
    .concat(ritualist_elites)
    .concat(paragon_elites)
    .concat(dervish_elites)
);
