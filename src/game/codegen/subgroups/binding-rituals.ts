import { toNormalized } from "../name-mappers";

export const all_binding_rituals = new Set(
  [
    "Agony",
    "Anguish",
    "Bloodsong",
    "Call to the Spirit Realm",
    "Destruction",
    "Disenchantment",
    "Displacement",
    "Dissonance",
    "Earthbind",
    "Empowerment",
    "Gaze of Fury",
    "Life",
    "Pain",
    "Preservation",
    "Recovery",
    "Recuperation",
    "Rejuvenation",
    "Restoration",
    "Shadowsong",
    "Shelter",
    "Soothing",
    "Union",
    "Vampirism",
    "Wanderlust",
  ].map(toNormalized)
);
