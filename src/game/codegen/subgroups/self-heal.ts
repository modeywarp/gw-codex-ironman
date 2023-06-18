import { toNormalized } from "../name-mappers";

const necromancer_self_heal = [
  "Angorodon's Gaze",
  "Animate Vampiric Horror",
  "Blood Drinker",
  "Blood Bond",
  "Blood of the Aggressor",
  "Blood Renewal",
  "Consume Corpse",
  "Feast of Corruption",
  "Grenth's Balance",
  "Hexer's Vigor",
  "Insidious Parasite",
  "Mark of Subversion",
  "Life Siphon",
  "Life Transfer",
  "Parasitic Bond",
  "Taste of Death",
  "Taste of Pain",
  "Ravenous Gaze",
  "Signet of Lost Souls",
  "Soul Feast",
  "Soul Leech",
  "Strip Enchantment",
  "Unholy Feast",
  "Vampiric Bite",
  "Vampiric Gaze",
  "Vampiric Spirit",
  "Vampiric Swarm",
  "Vampiric Touch",
  "Well of Blood",
  "Well of Power",
].map(toNormalized);

const ritualist_self_heal = [
  "Boon of Creation",
  "Caretaker's Charge",
  "Consume Soul",
  "Defiant Was Xinrae",
  "Feast of Souls",
  "Generous Was Tsungrai",
  "Life",
  "Mend Body and Soul",
  "Mending Grip",
  "Nightmare Weapon",
  "Preservation",
  "Protective Was Kaolai",
  "Rejuvenation",
  "Resilient Was Xiko",
  "Soothing Memories",
  "Spirit Light",
  "Spirit Light Weapon",
  "Spirit Transfer",
  "Spirit to Flesh",
  "Spirit's Gift",
  "Vampirism",
  "Vengeful Was Khanhei",
  "Vengeful Weapon",
  "Weapon of Remedy",
  "Weapon of Warding",
  "Wielder's Boon",
  "Xinrae's Weapon",
].map(toNormalized);

const assassin_self_heal = [
  "Death's Charge",
  "Death's Retreat",
  "Heart of Shadow",
  "Sadist's Signet",
  "Shadow Refuge",
  "Shadow Sanctuary",
  "Shroud of Distress",
  "Feigned Neutrality",
  "Vampiric Assault",
  "Way of Perfection",
].map(toNormalized);

const warrior_self_heal = [
  "Healing Signet",
  "Lion's Comfort",
  '"I Will Avenge You!"',
  '"I Will Survive!"',
  '"Victory Is Mine!"',
].map(toNormalized);

const ranger_self_heal = [
  "Troll Unguent",
  "Heal as One",
  "Melandru's Resilience",
  '"Together as One!"',
  "Comfort Animal",
  "Companionship",
  "Healing Spring",
  "Never Rampage Alone",
  "Predatory Bond",
].map(toNormalized);

const monk_self_heal = [
  "Contemplation of Purity",
  "Empathic Removal",
  "Blessed Light",
  "Boon Signet",
  "Dismiss Condition",
  "Divine Healing",
  "Divine Intervention",
  "Dwayna's Kiss",
  "Ethereal Light",
  "Gift of Health",
  "Glimmer of Light",
  "Heal Area",
  "Heal Party",
  "Healing Breeze",
  "Healing Burst",
  "Healing Hands",
  "Healing Light",
  "Healing Ribbon",
  "Healing Touch",
  "Heaven's Delight",
  "Karei's Healing Circle",
  "Light of Deliverance",
  "Orison of Healing",
  "Patient Spirit",
  "Restful Breeze",
  "Renew Life",
  "Signet of Devotion",
  "Signet of Rejuvenation",
  "Vigorous Spirit",
  "Watchful Healing",
  "Watchful Spirit",
  "Word of Healing",
  "Words of Comfort",
  "Zealous Benediction",
].map(toNormalized);

const elementalist_self_heal = [
  "Aura of Restoration",
  "Elemental Lord",
  "Ether Renewal",
  "Glyph of Restoration",
  "Mist Form",
  "Ice Spear",
  "Phoenix",
  "Second Wind",
  "Swirling Aura",
  "Ward Against Harm",
].map(toNormalized);

const mesmer_self_heal = [
  "Ether Feast",
  "Mantra of Signets",
  "Illusion of Weakness",
].map(toNormalized);

const paragon_self_heal = [
  '"Fall Back!"',
  '"Help Me!"',
  '"Incoming!"',
  '"Never Surrender!"',
  "Angelic Bond",
  "Aria of Restoration",
  "Ballad of Restoration",
  "Chorus of Restoration",
  "Finale of Restoration",
  "Leader's Comfort",
  "Mending Refrain",
  "Song of Restoration",
].map(toNormalized);

const dervish_self_heal = [
  "Avatar of Dwayna",
  "Avatar of Grenth",
  "Conviction",
  "Dwayna's Touch",
  "Faithful Intervention",
  "Grenth's Aura",
  "Mystic Healing",
  "Mystic Regeneration",
  "Mystic Vigor",
  "Natural Healing",
  "Pious Renewal",
  "Pious Restoration",
  "Signet of Pious Light",
  "Twin Moon Sweep",
  "Victorious Sweep",
  "Vital Boon",
  "Watchful Intervention",
].map(toNormalized);

const pve_self_heal = [
  "Ebon Escape",
  "Junundu Bite",
  "Junundu Wail",
  "Siege Devourer Feast",
].map(toNormalized);

export const all_self_heals = new Set(
  []
    .concat(warrior_self_heal)
    .concat(necromancer_self_heal)
    .concat(monk_self_heal)
    .concat(ranger_self_heal)
    .concat(elementalist_self_heal)
    .concat(mesmer_self_heal)
    .concat(ritualist_self_heal)
    .concat(assassin_self_heal)
    .concat(paragon_self_heal)
    .concat(dervish_self_heal)
    .concat(pve_self_heal)
);
