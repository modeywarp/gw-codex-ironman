import { toNormalized } from "../name-mappers";

export const all_resurrections = new Set(
  [
    '"By Ural\'s Hammer!"',
    '"We Shall Return!"',
    "Death Pact Signet",
    "Death Pact Signet (PvP)",
    "Eternal Aura",
    "Flesh of My Flesh",
    "Flesh of My Flesh (PvP)",
    "Junundu Wail",
    "Light of Dwayna",
    "Lively Was Naomei",
    "Rebirth",
    "Renew Life",
    "Restoration",
    "Restoration (PvP)",
    "Restore Life",
    "Resurrect",
    "Resurrection Chant",
    "Resurrection Signet",
    "Seed of Resurrection",
    "Signet of Return",
    "Signet of Return (PvP)",
    "Sunspear Rebirth Signet",
    "Unyielding Aura",
    "Unyielding Aura (PvP)",
    "Vengeance",
  ].map(toNormalized)
);
