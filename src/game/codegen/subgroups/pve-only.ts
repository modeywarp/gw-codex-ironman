import { toNormalized } from "../name-mappers";

const warrior_pve_skills = [
  "Seven Weapons Stance",
  "Whirlwind Attack",
  "\"Save Yourselves!\"",
].map(toNormalized);

const ranger_pve_skills = [
  "\"Together as One!\"",
  "Triple Shot",
  "Never Rampage Alone",
].map(toNormalized);

const monk_pve_skills = [
  "Judgment Strike",
  "Selfless Spirit",
  "Seed of Life",
].map(toNormalized);

const mesmer_pve_skills = [
  "Time Ward",
  "Ether Nightmare",
  "Cry of Pain",
].map(toNormalized);

const necromancer_pve_skills = [
  "Soul Taker",
  "Signet of Corruption",
  "Necrosis",
].map(toNormalized);

const elementalist_pve_skills = [
  "Over the Limit",
  "Elemental Lord",
  "Intensity",
].map(toNormalized);

const assassin_pve_skills = [
  "Shadow Theft",
  "Shadow Sanctuary",
  "Critical Agility"
].map(toNormalized);

const ritualist_pve_skills = [
  "Weapons of Three Forges",
  "Summon Spirits",
  "Vampirism",
].map(toNormalized);

const paragon_pve_skills = [
  "Heroic Refrain",
  "Spear of Fury",
  "\"There's Nothing to Fear!\""
].map(toNormalized);

const dervish_pve_skills = [
  "Eternal Aura",
  "Aura of Holy Might",
  "Vow of Revolution"
].map(toNormalized);

export const all_profession_pve_skills = new Set([
  ...warrior_pve_skills,
  ...ranger_pve_skills,
  ...monk_pve_skills,
  ...mesmer_pve_skills,
  ...necromancer_pve_skills,
  ...elementalist_pve_skills,
  ...assassin_pve_skills,
  ...ritualist_pve_skills,
  ...paragon_pve_skills,
  ...dervish_pve_skills
]);
