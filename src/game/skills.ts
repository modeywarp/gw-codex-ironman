import type { Profession } from "./professions";
import { toIcon, toDisplay, toNormalized } from "./codegen/name-mappers";
import { all_self_heals } from "./codegen/subgroups/self-heal";
import { all_elites } from "./codegen/subgroups/elites";
import {
  getSkillOrigin,
  type SkillOrigin,
} from "./codegen/subgroups/campaigns";
import { all_heal_skills } from "./codegen/subgroups/heal";
import { all_defensive_skills } from "./codegen/subgroups/defensive";
import { all_lead_attacks } from "./codegen/subgroups/lead-attacks";
import { all_offhand_attacks } from "./codegen/subgroups/offhand-attacks";
import { all_binding_rituals } from "./codegen/subgroups/binding-rituals";
import { all_minions } from "./codegen/subgroups/minions";
import { all_pet_summons } from "./codegen/subgroups/pet_summons";
import { all_resurrections } from "./codegen/subgroups/resurrection";
import { all_primary_attribute_skills } from "./codegen/subgroups/primary-attributes";
import {
  all_global_pve_skills,
  all_profession_pve_skills,
} from "./codegen/subgroups/pve-only";
import {
  getSkillWarriorWeaponType,
  type WarriorWeaponType,
} from "./codegen/subgroups/weapons";
import {
  getSkillElementalistElement,
  type ElementalistElement,
} from "./codegen/subgroups/element";
import type { Attribute } from "./codegen/attributes";
import { skill_names_to_id } from "./codegen/skill-name-to-id";
import { getSkillAttribute } from "./codegen/attributes/skill-id-to-attribute";

function makeSkill(link, options: Partial<SkillOptions>): Skill {
  const normalized_name = toNormalized(link);

  const is_defensive = all_defensive_skills.has(normalized_name);
  const is_self_heal = all_self_heals.has(normalized_name);
  const id = skill_names_to_id.get(normalized_name);

  return {
    link,
    name: toDisplay(link),
    icon: toIcon(link),
    options: {
      origin: getSkillOrigin(normalized_name),
      id,
      attribute: getSkillAttribute(id),

      is_self_heal,
      is_defensive,
      is_heal: all_heal_skills.has(normalized_name),
      is_elite: all_elites.has(normalized_name),
      is_offensive: !is_defensive,
      is_support: is_defensive && !is_self_heal,
      is_lead_attack: all_lead_attacks.has(normalized_name),
      is_offhand_attack: all_offhand_attacks.has(normalized_name),
      is_binding_ritual: all_binding_rituals.has(normalized_name),
      is_minion: all_minions.has(normalized_name),
      is_pet_summon: all_pet_summons.has(normalized_name),
      is_resurrection: all_resurrections.has(normalized_name),
      is_primary_attribute: all_primary_attribute_skills.has(normalized_name),
      is_profession_pve_skill: all_profession_pve_skills.has(normalized_name),
      is_global_pve_skill: all_global_pve_skills.has(normalized_name),
      warrior_weapon_type: getSkillWarriorWeaponType(normalized_name),
      elementalist_element: getSkillElementalistElement(normalized_name),
      profession: options.profession || "warrior",

      ...options,
    },
  };
}

/// Any field added here must be added to the `makeSkill()` function or else
/// tsc will complain (but at a different place so it's kinda confusing).
interface SkillOptions {
  id: number;
  is_self_heal: boolean;
  is_heal: boolean;
  is_elite: boolean;
  is_offensive: boolean;
  is_defensive: boolean;
  is_support: boolean;
  is_lead_attack: boolean;
  is_offhand_attack: boolean;
  is_minion: boolean;
  is_binding_ritual: boolean;
  is_pet_summon: boolean;
  is_resurrection: boolean;
  is_primary_attribute: boolean;
  is_profession_pve_skill: boolean;
  is_global_pve_skill: boolean;
  warrior_weapon_type: WarriorWeaponType | null;
  elementalist_element: ElementalistElement | null;
  origin: SkillOrigin;
  attribute: Attribute;
  profession: Profession;
}
export interface Skill {
  name: string;
  link: string;

  /**
   * the name of the icon file, for example `Triple Shot` will have
   * `icon = "triple shot.webp"`
   */
  icon: string;

  options: SkillOptions;
}

export type SkillsDatabase = Map<Profession, Skill[]>;

/**
 * As you may guess i did not fill this map with 1280 entries by hand,
 * - I went on the wiki page that lists all the skills in the game then did a queryselectorAll
 * on all icons and map the array to `node.getAttribute('href')`.
 * - I repeated the process with subgroups (for example all self heals, all attacks, etc...)
 * that you can find in [/src/game/codegen/subgroups](/src/game/codegen/subgroups/)
 * - Then I let the `makeSkill()` function check whether a skill belong to a subgroup or not.
 */
const database: SkillsDatabase = new Map([
  [
    "warrior",
    [
      makeSkill("/wiki/File:%22Charge!%22_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:%22Coward!%22_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:%22For_Great_Justice!%22_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:%22I_Meant_to_Do_That!%22_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:%22None_Shall_Pass!%22_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:%22On_Your_Knees!%22_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:%22Retreat!%22_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:%22Shields_Up!%22_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:%22Watch_Yourself!%22_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:%22You_Will_Die!%22_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:%22You%27re_All_Alone!%22_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Agonizing_Chop_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Auspicious_Blow_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Auspicious_Parry_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Axe_Rake_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Axe_Twist_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Backbreaker_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Balanced_Stance_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Barbarous_Slice_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Battle_Rage_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Belly_Smash_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Berserker_Stance_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Body_Blow_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Bonetti%27s_Defense_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Bull%27s_Charge_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Bull%27s_Strike_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Burst_of_Aggression_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Charging_Strike_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Cleave_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Counter_Blow_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Counterattack_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Crippling_Slash_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Critical_Chop_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Crude_Swing_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Crushing_Blow_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Cyclone_Axe_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Deadly_Riposte_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Decapitate_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Defensive_Stance_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Deflect_Arrows_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Defy_Pain_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Desperation_Blow_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Devastating_Hammer_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Disarm_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Disciplined_Stance_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Dismember_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Disrupting_Chop_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Distracting_Blow_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Distracting_Strike_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Dolyak_Signet_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Dragon_Slash_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Drunken_Blow_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Dwarven_Battle_Stance_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Earth_Shaker_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Endure_Pain_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Enraged_Smash_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Enraging_Charge_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Eviscerate_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Executioner%27s_Strike_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Fear_Me!_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Fierce_Blow_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Final_Thrust_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Flail_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Flourish_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Flurry_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Forceful_Blow_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Frenzied_Defense_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Frenzy_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Furious_Axe_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Galrath_Slash_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Gash_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Gladiator%27s_Defense_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Grapple_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Griffon%27s_Sweep_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Hammer_Bash_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Hamstring_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Headbutt_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Healing_Signet_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Heavy_Blow_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Hundred_Blades_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:I_Will_Avenge_You!_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:I_Will_Survive!_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Irresistible_Blow_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Jaizhenju_Strike_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Keen_Chop_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Knee_Cutter_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Lacerating_Chop_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Leviathan%27s_Sweep_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Lion%27s_Comfort_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Magehunter_Strike_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Magehunter%27s_Smash_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Mighty_Blow_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Mokele_Smash_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Overbearing_Smash_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Penetrating_Blow_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Penetrating_Chop_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Power_Attack_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Primal_Rage_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Protector%27s_Defense_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Protector%27s_Strike_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Pulverizing_Smash_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Pure_Strike_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Quivering_Blade_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Rage_of_the_Ntouka_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Renewing_Smash_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Riposte_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Rush_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Savage_Slash_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Seeking_Blade_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Sever_Artery_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Shield_Bash_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Shield_Stance_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Shove_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Signet_of_Stamina_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Signet_of_Strength_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Silverwing_Slash_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Skull_Crack_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Soldier%27s_Defense_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Soldier%27s_Speed_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Soldier%27s_Stance_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Soldier%27s_Strike_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Sprint_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Staggering_Blow_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Standing_Slash_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Steady_Stance_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Steelfang_Slash_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Sun_and_Moon_Slash_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Swift_Chop_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Symbolic_Strike_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Thrill_of_Victory_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Tiger_Stance_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:To_the_Limit!_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Triple_Chop_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Victory_is_Mine!_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Warrior%27s_Cunning_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Warrior%27s_Endurance_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Wary_Stance_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Whirling_Axe_(large).jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Wild_Blow_(large).jpg", { profession: "warrior" }),
      makeSkill("/wiki/File:Yeti_Smash_(large).jpg", { profession: "warrior" }),

      makeSkill("/wiki/File:Seven_Weapons_Stance.jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:%22Save_Yourselves!%22.jpg", {
        profession: "warrior",
      }),
      makeSkill("/wiki/File:Whirlwind_Attack.jpg", { profession: "warrior" }),
    ],
  ],
  [
    "ranger",
    [
      makeSkill("/wiki/File:Antidote_Signet_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Apply_Poison_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Archer%27s_Signet_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Arcing_Shot_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Barbed_Arrows_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Barbed_Trap_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Barrage_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Bestial_Fury_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Bestial_Mauling_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Bestial_Pounce_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Body_Shot_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Brambles_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Broad_Head_Arrow_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Brutal_Strike_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Burning_Arrow_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Call_of_Haste_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Call_of_Protection_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Called_Shot_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Charm_Animal_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Choking_Gas_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Comfort_Animal_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Companionship_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Concussion_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Conflagration_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Crippling_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Crossfire_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Debilitating_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Determined_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Disrupting_Accuracy_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Disrupting_Lunge_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Disrupting_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Distracting_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Dodge_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Dryder%27s_Defenses_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Dual_Shot_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Dust_Trap_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Edge_of_Extinction_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Energizing_Wind_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Enraged_Lunge_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Equinox_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Escape_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Expert_Focus_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Expert%27s_Dexterity_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Famine_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Favorable_Winds_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Feral_Aggression_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Feral_Lunge_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Ferocious_Strike_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Fertile_Season_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Flame_Trap_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Focused_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Forked_Arrow_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Frozen_Soil_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Glass_Arrows_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Greater_Conflagration_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Heal_as_One_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Healing_Spring_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Heket%27s_Rampage_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Hunter%27s_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Ignite_Arrows_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Incendiary_Arrows_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Infuriating_Heat_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Keen_Arrow_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Kindle_Arrows_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Lacerate_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Lightning_Reflexes_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Magebane_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Maiming_Strike_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Marauder%27s_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Marksman%27s_Wager_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Melandru%27s_Arrows_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Melandru%27s_Assault_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Melandru%27s_Resilience_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Melandru%27s_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Muddy_Terrain_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Natural_Stride_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Nature%27s_Renewal_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Needling_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Oath_Shot_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Otyugh%27s_Cry_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Penetrating_Attack_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Pestilence_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Piercing_Trap_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Pin_Down_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Point_Blank_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Poison_Arrow_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Poison_Tip_Signet_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Poisonous_Bite_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Pounce_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Power_Shot_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Practiced_Stance_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Precision_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Predator%27s_Pounce_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Predatory_Bond_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Predatory_Season_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Prepared_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Primal_Echoes_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Punishing_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Quick_Shot_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Quickening_Zephyr_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Quicksand_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Rampage_as_One_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Rapid_Fire_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Read_the_Wind_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Revive_Animal_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Roaring_Winds_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Run_as_One_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Savage_Pounce_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Savage_Shot_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Scavenger_Strike_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Scavenger%27s_Focus_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Screaming_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Seeking_Arrows_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Serpent%27s_Quickness_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Sloth_Hunter%27s_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Smoke_Trap_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Snare_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Spike_Trap_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Splinter_Shot_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Storm_Chaser_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Storm%27s_Embrace_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Strike_as_One_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Sundering_Attack_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Symbiosis_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Symbiotic_Bond_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Throw_Dirt_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Bestial_Fury_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Toxicity_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Tranquility_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Trapper%27s_Focus_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Trapper%27s_Speed_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Tripwire_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Troll_Unguent_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Viper%27s_Nest_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Volley_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Whirling_Defense_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Winnowing_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Winter_(large).jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Zojun%27s_Haste_(large).jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Zojun%27s_Shot_(large).jpg", {
        profession: "ranger",
      }),

      makeSkill("/wiki/File:%22Together_as_One!%22.jpg", {
        profession: "ranger",
      }),
      makeSkill("/wiki/File:Never_Rampage_Alone.jpg", { profession: "ranger" }),
      makeSkill("/wiki/File:Triple_Shot.jpg", { profession: "ranger" }),
    ],
  ],
  [
    "monk",
    [
      makeSkill("/wiki/File:Aegis_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Air_of_Enchantment_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Amity_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Aura_of_Faith_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Aura_of_Stability_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Balthazar%27s_Aura_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Balthazar%27s_Pendulum_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Balthazar%27s_Spirit_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Bane_Signet_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Banish_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Blessed_Aura_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Blessed_Light_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Blessed_Signet_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Boon_Signet_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Castigation_Signet_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Contemplation_of_Purity_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Convert_Hexes_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Cure_Hex_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Defender%27s_Zeal_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Deny_Hexes_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Dismiss_Condition_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Divert_Hexes_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Divine_Boon_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Divine_Healing_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Divine_Intervention_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Divine_Spirit_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Draw_Conditions_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Dwayna%27s_Kiss_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Dwayna%27s_Sorrow_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Empathic_Removal_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Essence_Bond_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Ethereal_Light_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Extinguish_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Gift_of_Health_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Glimmer_of_Light_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Guardian_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Heal_Area_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Heal_Other_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Heal_Party_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Healer%27s_Boon_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Healer%27s_Covenant_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Healing_Breeze_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Healing_Burst_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Healing_Hands_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Healing_Light_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Healing_Ribbon_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Healing_Ring_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Healing_Seed_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Healing_Touch_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Healing_Whisper_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Heaven%27s_Delight_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Holy_Haste_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Holy_Strike_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Holy_Veil_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Holy_Wrath_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Infuse_Health_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Jamei%27s_Gaze_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Judge%27s_Insight_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Judge%27s_Intervention_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Karei%27s_Healing_Circle_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Kirin%27s_Wrath_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Life_Attunement_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Life_Barrier_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Life_Bond_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Life_Sheath_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Light_of_Deliverance_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Light_of_Dwayna_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Live_Vicariously_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Mark_of_Protection_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Martyr_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Mend_Ailment_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Mend_Condition_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Mending_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Mending_Touch_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Orison_of_Healing_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Pacifism_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Patient_Spirit_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Peace_and_Harmony_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Pensive_Guardian_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Protective_Bond_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Protective_Spirit_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Purge_Conditions_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Purge_Signet_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Purifying_Veil_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Ray_of_Judgment_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Rebirth_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Release_Enchantments_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Remove_Hex_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Renew_Life_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Restful_Breeze_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Restore_Condition_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Restore_Life_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Resurrect_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Resurrection_Chant_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Retribution_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Reversal_of_Damage_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Reversal_of_Fortune_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Reverse_Hex_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Scourge_Enchantment_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Scourge_Healing_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Scourge_Sacrifice_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Scribe%27s_Insight_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Shield_Guardian_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Shield_of_Absorption_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Shield_of_Deflection_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Shield_of_Judgment_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Shield_of_Regeneration_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Shielding_Hands_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Signet_of_Devotion_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Signet_of_Judgment_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Signet_of_Mystic_Wrath_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Signet_of_Rage_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Signet_of_Rejuvenation_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Signet_of_Removal_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Smite_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Smite_Condition_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Smite_Hex_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Smiter%27s_Boon_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Spear_of_Light_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Spell_Breaker_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Spell_Shield_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Spirit_Bond_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Spotless_Mind_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Spotless_Soul_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Stonesoul_Strike_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Strength_of_Honor_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Succor_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Supportive_Spirit_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Symbol_of_Wrath_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Unyielding_Aura_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Vengeance_(large).jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Vigorous_Spirit_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Vital_Blessing_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Watchful_Healing_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Watchful_Spirit_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Withdraw_Hexes_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Word_of_Censure_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Word_of_Healing_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Words_of_Comfort_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Zealot%27s_Fire_(large).jpg", {
        profession: "monk",
      }),
      makeSkill("/wiki/File:Zealous_Benediction_(large).jpg", {
        profession: "monk",
      }),

      makeSkill("/wiki/File:Judgment_Strike.jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Selfless_Spirit.jpg", { profession: "monk" }),
      makeSkill("/wiki/File:Seed_of_Life.jpg", { profession: "monk" }),
    ],
  ],
  [
    "elementalist",
    [
      makeSkill("/wiki/File:Aftershock_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Air_Attunement_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Arc_Lightning_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Armor_of_Earth_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Armor_of_Frost_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Armor_of_Mist_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Ash_Blast_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Aura_of_Restoration_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Bed_of_Coals_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Blinding_Flash_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Blinding_Surge_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Blurred_Vision_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Breath_of_Fire_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Burning_Speed_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Chain_Lightning_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Chilling_Winds_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Churning_Earth_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Conjure_Flame_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Conjure_Frost_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Conjure_Lightning_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Crystal_Wave_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Deep_Freeze_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Double_Dragon_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Dragon%27s_Stomp_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Earth_Attunement_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Earthen_Shackles_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Earthquake_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Ebon_Hawk_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Elemental_Attunement_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Elemental_Flame_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Energy_Blast_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Energy_Boon_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Enervating_Charge_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Eruption_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Ether_Prism_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Ether_Prodigy_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Ether_Renewal_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Fire_Attunement_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Fire_Storm_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Fireball_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Flame_Burst_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Flame_Djinn%27s_Haste_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Flare_(large).jpg", { profession: "elementalist" }),
      makeSkill("/wiki/File:Freezing_Gust_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Frigid_Armor_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Frozen_Burst_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Gale_(large).jpg", { profession: "elementalist" }),
      makeSkill("/wiki/File:Glimmering_Mark_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Glowing_Gaze_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Glowing_Ice_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Glowstone_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Glyph_of_Concentration_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Glyph_of_Elemental_Power_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Glyph_of_Energy_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Glyph_of_Essence_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Glyph_of_Immolation_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Glyph_of_Lesser_Energy_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Glyph_of_Renewal_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Glyph_of_Restoration_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Glyph_of_Sacrifice_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Glyph_of_Swiftness_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Grasping_Earth_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Gust_(large).jpg", { profession: "elementalist" }),
      makeSkill("/wiki/File:Ice_Prison_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Ice_Spear_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Ice_Spikes_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Icy_Prism_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Icy_Shackles_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Immolate_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Incendiary_Bonds_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Inferno_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Invoke_Lightning_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Iron_Mist_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Kinetic_Armor_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Lava_Arrows_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Lava_Font_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Lightning_Bolt_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Lightning_Hammer_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Lightning_Javelin_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Lightning_Orb_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Lightning_Strike_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Lightning_Surge_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Lightning_Touch_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Liquid_Flame_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Maelstrom_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Magnetic_Aura_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Magnetic_Surge_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Mark_of_Rodgort_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Master_of_Magic_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Meteor_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Meteor_Shower_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Mind_Blast_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Mind_Burn_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Mind_Freeze_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Mind_Shock_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Mirror_of_Ice_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Mist_Form_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Obsidian_Flame_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Obsidian_Flesh_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Phoenix_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Ride_the_Lightning_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Rodgort%27s_Invocation_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Rust_(large).jpg", { profession: "elementalist" }),
      makeSkill("/wiki/File:Sandstorm_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Savannah_Heat_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Searing_Flames_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Searing_Heat_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Second_Wind_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Shard_Storm_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Shatterstone_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Shell_Shock_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Shock_(large).jpg", { profession: "elementalist" }),
      makeSkill("/wiki/File:Shock_Arrow_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Shockwave_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Slippery_Ground_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Sliver_Armor_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Smoldering_Embers_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Star_Burst_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Steam_(large).jpg", { profession: "elementalist" }),
      makeSkill("/wiki/File:Stone_Daggers_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Stone_Sheath_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Stone_Striker_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Stoneflesh_Aura_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Stoning_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Storm_Djinn%27s_Haste_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Swirling_Aura_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Teinai%27s_Crystals_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Teinai%27s_Heat_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Teinai%27s_Prison_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Teinai%27s_Wind_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Thunderclap_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Unsteady_Ground_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Vapor_Blade_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Ward_Against_Elements_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Ward_Against_Foes_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Ward_Against_Harm_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Ward_Against_Melee_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Ward_of_Stability_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Ward_of_Weakness_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Water_Attunement_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Water_Trident_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Whirlwind_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Windborne_Speed_(large).jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Winter%27s_Embrace_(large).jpg", {
        profession: "elementalist",
      }),

      makeSkill("/wiki/File:Over_the_Limit.jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Elemental_Lord.jpg", {
        profession: "elementalist",
      }),
      makeSkill("/wiki/File:Intensity.jpg", { profession: "elementalist" }),
    ],
  ],
  [
    "necromancer",
    [
      makeSkill("/wiki/File:Angorodon%27s_Gaze_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Animate_Bone_Fiend_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Animate_Bone_Horror_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Animate_Bone_Minions_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Animate_Flesh_Golem_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Animate_Shambling_Horror_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Animate_Vampiric_Horror_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Atrophy_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Aura_of_the_Lich_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Awaken_the_Blood_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Barbed_Signet_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Barbs_(large).jpg", { profession: "necromancer" }),
      makeSkill("/wiki/File:Bitter_Chill_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Blood_Bond_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Blood_Drinker_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Blood_is_Power_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Blood_of_the_Aggressor_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Blood_of_the_Master_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Blood_Renewal_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Blood_Ritual_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Cacophony_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Chilblains_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Consume_Corpse_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Contagion_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Corrupt_Enchantment_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Cultist%27s_Fervor_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Dark_Aura_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Dark_Bond_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Dark_Fury_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Dark_Pact_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Death_Nova_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Deathly_Chill_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Deathly_Swarm_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Defile_Defenses_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Defile_Enchantments_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Defile_Flesh_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Demonic_Flesh_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Depravity_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Desecrate_Enchantments_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Discord_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Enfeeble_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Enfeebling_Blood_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Enfeebling_Touch_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Envenom_Enchantments_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Faintheartedness_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Feast_for_the_Dead_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Feast_of_Corruption_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Fetid_Ground_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Foul_Feast_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Gaze_of_Contempt_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Grenth%27s_Balance_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Hexer%27s_Vigor_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Icy_Veins_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Infuse_Condition_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Insidious_Parasite_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Jagged_Bones_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Jaundiced_Gaze_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Life_Siphon_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Life_Transfer_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Lifebane_Strike_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Lingering_Curse_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Malaise_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Malign_Intervention_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Mark_of_Fury_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Mark_of_Pain_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Mark_of_Subversion_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Masochism_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Meekness_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Necrotic_Traversal_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Offering_of_Blood_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Oppressive_Gaze_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Order_of_Apostasy_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Order_of_Pain_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Order_of_the_Vampire_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Order_of_Undeath_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Pain_of_Disenchantment_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Parasitic_Bond_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Plague_Sending_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Plague_Signet_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Plague_Touch_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Poisoned_Heart_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Price_of_Failure_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Putrid_Bile_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Putrid_Explosion_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Putrid_Flesh_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Ravenous_Gaze_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Reaper%27s_Mark_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Reckless_Haste_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Rend_Enchantments_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Rigor_Mortis_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Rip_Enchantment_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Rising_Bile_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Rotting_Flesh_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Shadow_of_Fear_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Shadow_Strike_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Shivers_of_Dread_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Signet_of_Agony_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Signet_of_Lost_Souls_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Signet_of_Sorrow_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Signet_of_Suffering_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Soul_Barbs_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Soul_Bind_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Soul_Feast_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Soul_Leech_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Spinal_Shivers_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Spiteful_Spirit_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Spoil_Victor_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Strip_Enchantment_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Suffering_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Tainted_Flesh_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Taste_of_Death_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Taste_of_Pain_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Touch_of_Agony_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Toxic_Chill_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Ulcerous_Lungs_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Unholy_Feast_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Vampiric_Bite_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Vampiric_Gaze_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Vampiric_Spirit_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Vampiric_Swarm_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Vampiric_Touch_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Verata%27s_Aura_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Verata%27s_Gaze_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Verata%27s_Sacrifice_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Vile_Miasma_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Vile_Touch_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Virulence_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Vocal_Minority_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Wail_of_Doom_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Wallow%27s_Bite_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Weaken_Armor_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Weaken_Knees_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Well_of_Blood_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Well_of_Darkness_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Well_of_Power_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Well_of_Ruin_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Well_of_Silence_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Well_of_Suffering_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Well_of_the_Profane_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Well_of_Weariness_(large).jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Wither_(large).jpg", { profession: "necromancer" }),
      makeSkill("/wiki/File:Withering_Aura_(large).jpg", {
        profession: "necromancer",
      }),

      makeSkill("/wiki/File:Soul_Taker.jpg", { profession: "necromancer" }),
      makeSkill("/wiki/File:Signet_of_Corruption.jpg", {
        profession: "necromancer",
      }),
      makeSkill("/wiki/File:Necrosis.jpg", { profession: "necromancer" }),
    ],
  ],
  [
    "mesmer",
    [
      makeSkill("/wiki/File:Accumulated_Pain_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Air_of_Disenchantment_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Ancestor%27s_Visage_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Aneurysm_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Arcane_Conundrum_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Arcane_Echo_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Arcane_Languor_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Arcane_Larceny_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Arcane_Mimicry_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Arcane_Thievery_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Auspicious_Incantation_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Backfire_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Blackout_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Calculated_Risk_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Channeling_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Chaos_Storm_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Clumsiness_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Complicate_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Confusing_Images_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Conjure_Nightmare_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Conjure_Phantasm_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Crippling_Anguish_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Cry_of_Frustration_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Discharge_Enchantment_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Distortion_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Diversion_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Drain_Delusions_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Drain_Enchantment_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Echo_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Elemental_Resistance_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Empathy_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Enchanter%27s_Conundrum_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Energy_Burn_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Energy_Drain_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Energy_Surge_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Energy_Tap_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Epidemic_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Ether_Feast_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Ether_Lord_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Ether_Phantom_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Ether_Signet_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Ethereal_Burden_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Expel_Hexes_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Extend_Conditions_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Feedback_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Fevered_Dreams_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Fragility_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Frustration_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Guilt_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Hex_Breaker_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Hex_Eater_Signet_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Hex_Eater_Vortex_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Hypochondria_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Ignorance_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Illusion_of_Haste_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Illusion_of_Pain_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Illusion_of_Weakness_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Illusionary_Weaponry_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Images_of_Remorse_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Imagined_Burden_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Ineptitude_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Inspired_Enchantment_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Inspired_Hex_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Keystone_Signet_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Kitah%27s_Burden_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Leech_Signet_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Lyssa%27s_Aura_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Lyssa%27s_Balance_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Mantra_of_Concentration_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Mantra_of_Earth_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Mantra_of_Flame_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Mantra_of_Frost_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Mantra_of_Inscriptions_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Mantra_of_Lightning_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Mantra_of_Persistence_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Mantra_of_Recall_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Mantra_of_Recovery_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Mantra_of_Resolve_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Mantra_of_Signets_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Migraine_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Mind_Wrack_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Mirror_of_Disenchantment_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Mistrust_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Overload_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Panic_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Persistence_of_Memory_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Phantom_Pain_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Physical_Resistance_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Power_Block_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Power_Drain_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Power_Flux_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Power_Leak_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Power_Leech_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Power_Lock_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Power_Return_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Power_Spike_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Price_of_Pride_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Psychic_Distraction_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Psychic_Instability_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Recurring_Insecurity_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Revealed_Enchantment_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Revealed_Hex_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Shame_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Shared_Burden_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Shatter_Delusions_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Shatter_Enchantment_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Shatter_Hex_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Shatter_Storm_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Shrinking_Armor_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Signet_of_Clumsiness_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Signet_of_Disenchantment_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Signet_of_Disruption_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Signet_of_Distraction_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Signet_of_Humility_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Signet_of_Illusions_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Signet_of_Midnight_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Signet_of_Recall_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Signet_of_Weariness_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Simple_Thievery_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Soothing_Images_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Spirit_of_Failure_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Spirit_Shackles_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Spiritual_Pain_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Stolen_Speed_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Sum_of_All_Fears_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Symbolic_Celerity_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Symbolic_Posture_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Symbols_of_Inspiration_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Sympathetic_Visage_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Tease_(large).jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Unnatural_Signet_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Visions_of_Regret_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Wandering_Eye_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Waste_Not,_Want_Not_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Wastrel%27s_Demise_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Wastrel%27s_Worry_(large).jpg", {
        profession: "mesmer",
      }),
      makeSkill("/wiki/File:Web_of_Disruption_(large).jpg", {
        profession: "mesmer",
      }),

      makeSkill("/wiki/File:Time_Ward.jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Ether_Nightmare.jpg", { profession: "mesmer" }),
      makeSkill("/wiki/File:Cry_of_Pain.jpg", { profession: "mesmer" }),
    ],
  ],
  [
    "assassin",
    [
      makeSkill("/wiki/File:Assassin%27s_Promise_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Assassin%27s_Remedy_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Assault_Enchantments_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Augury_of_Death_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Aura_of_Displacement_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Beguiling_Haze_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Black_Lotus_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Black_Mantis_Thrust_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Black_Spider_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Blades_of_Steel_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Blinding_Powder_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Caltrops_(large).jpg", { profession: "assassin" }),
      makeSkill("/wiki/File:Crippling_Dagger_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Critical_Defenses_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Critical_Eye_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Critical_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Dancing_Daggers_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Dark_Apostasy_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Dark_Escape_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Dark_Prison_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Dash_(large).jpg", { profession: "assassin" }),
      makeSkill("/wiki/File:Deadly_Haste_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Deadly_Paradox_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Death_Blossom_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Death%27s_Charge_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Death%27s_Retreat_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Desperate_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Disrupting_Dagger_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Disrupting_Stab_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Enduring_Toxin_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Entangling_Asp_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Exhausting_Assault_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Expose_Defenses_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Expunge_Enchantments_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Falling_Lotus_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Falling_Spider_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Feigned_Neutrality_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Flashing_Blades_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Fox_Fangs_(large).jpg", { profession: "assassin" }),
      makeSkill("/wiki/File:Fox%27s_Promise_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Golden_Fang_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Golden_Fox_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Golden_Lotus_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Golden_Phoenix_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Golden_Skull_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Heart_of_Shadow_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Hidden_Caltrops_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Horns_of_the_Ox_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Impale_(large).jpg", { profession: "assassin" }),
      makeSkill("/wiki/File:Iron_Palm_(large).jpg", { profession: "assassin" }),
      makeSkill("/wiki/File:Jagged_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Jungle_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Leaping_Mantis_Sting_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Lift_Enchantment_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Locust%27s_Fury_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Lotus_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Malicious_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Mantis_Touch_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Mark_of_Death_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Mark_of_Insecurity_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Mark_of_Instability_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Mirrored_Stance_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Moebius_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Nine_Tail_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Palm_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Recall_(large).jpg", { profession: "assassin" }),
      makeSkill("/wiki/File:Repeating_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Return_(large).jpg", { profession: "assassin" }),
      makeSkill("/wiki/File:Sadist%27s_Signet_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Scorpion_Wire_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Seeping_Wound_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Shadow_Fang_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Shadow_Form_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Shadow_Meld_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Shadow_of_Haste_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Shadow_Prison_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Shadow_Refuge_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Shadow_Shroud_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Shadow_Walk_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Shadowy_Burden_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Shameful_Fear_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Sharpen_Daggers_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Shattering_Assault_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Shroud_of_Distress_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Shroud_of_Silence_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Signet_of_Deadly_Corruption_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Signet_of_Malice_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Signet_of_Shadows_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Signet_of_Toxic_Shock_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Signet_of_Twilight_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Siphon_Speed_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Siphon_Strength_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Smoke_Powder_Defense_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Spirit_Walk_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Swap_(large).jpg", { profession: "assassin" }),
      makeSkill("/wiki/File:Temple_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Trampling_Ox_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Twisting_Fangs_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Unseen_Fury_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Unsuspecting_Strike_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Vampiric_Assault_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Viper%27s_Defense_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Wastrel%27s_Collapse_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Way_of_Perfection_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Way_of_the_Assassin_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Way_of_the_Empty_Palm_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Way_of_the_Fox_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Way_of_the_Lotus_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Way_of_the_Master_(large).jpg", {
        profession: "assassin",
      }),
      makeSkill("/wiki/File:Wild_Strike_(large).jpg", {
        profession: "assassin",
      }),

      makeSkill("/wiki/File:Shadow_Theft.jpg", { profession: "assassin" }),
      makeSkill("/wiki/File:Shadow_Sanctuary.jpg", { profession: "assassin" }),
      makeSkill("/wiki/File:Critical_Agility.jpg", { profession: "assassin" }),
    ],
  ],
  [
    "ritualist",
    [
      makeSkill("/wiki/File:Agony_(large).jpg", { profession: "ritualist" }),
      makeSkill("/wiki/File:Ancestors%27_Rage_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Anguish_(large).jpg", { profession: "ritualist" }),
      makeSkill("/wiki/File:Anguished_Was_Lingwah_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Armor_of_Unfeeling_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Attuned_Was_Songkai_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Binding_Chains_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Blind_Was_Mingson_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Bloodsong_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Boon_of_Creation_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Brutal_Weapon_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Caretaker%27s_Charge_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Channeled_Strike_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Clamor_of_Souls_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Consume_Soul_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Cruel_Was_Daoshen_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Death_Pact_Signet_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Defiant_Was_Xinrae_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Destruction_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Destructive_Was_Glaive_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Disenchantment_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Displacement_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Dissonance_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Doom_(large).jpg", { profession: "ritualist" }),
      makeSkill("/wiki/File:Draw_Spirit_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Dulled_Weapon_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Earthbind_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Empowerment_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Energetic_Was_Lee_Sa_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Essence_Strike_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Explosive_Growth_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Feast_of_Souls_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Flesh_of_My_Flesh_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Gaze_from_Beyond_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Gaze_of_Fury_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Generous_Was_Tsungrai_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Ghostly_Haste_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Ghostly_Weapon_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Ghostmirror_Light_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Grasping_Was_Kuurong_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Guided_Weapon_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Lamentation_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Life_(large).jpg", { profession: "ritualist" }),
      makeSkill("/wiki/File:Lively_Was_Naomei_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Mend_Body_and_Soul_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Mending_Grip_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Mighty_Was_Vorizun_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Nightmare_Weapon_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Offering_of_Spirit_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Pain_(large).jpg", { profession: "ritualist" }),
      makeSkill("/wiki/File:Painful_Bond_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Preservation_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Protective_Was_Kaolai_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Pure_Was_Li_Ming_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Reclaim_Essence_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Recovery_(large).jpg", { profession: "ritualist" }),
      makeSkill("/wiki/File:Recuperation_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Rejuvenation_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Renewing_Memories_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Renewing_Surge_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Resilient_Was_Xiko_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Resilient_Weapon_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Restoration_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Ritual_Lord_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Rupture_Soul_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Shadowsong_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Shelter_(large).jpg", { profession: "ritualist" }),
      makeSkill("/wiki/File:Sight_Beyond_Sight_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Signet_of_Binding_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Signet_of_Creation_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Signet_of_Ghostly_Might_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Signet_of_Spirits_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Soothing_(large).jpg", { profession: "ritualist" }),
      makeSkill("/wiki/File:Soothing_Memories_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Soul_Twisting_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Spirit_Boon_Strike_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Spirit_Burn_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Spirit_Channeling_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Spirit_Light_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Spirit_Light_Weapon_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Spirit_Rift_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Spirit_Siphon_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Spirit_to_Flesh_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Spirit_Transfer_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Spiritleech_Aura_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Spirit%27s_Gift_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Spirit%27s_Strength_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Splinter_Weapon_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Sundering_Weapon_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Tranquil_Was_Tanasen_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Union_(large).jpg", { profession: "ritualist" }),
      makeSkill("/wiki/File:Vengeful_Was_Khanhei_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Vengeful_Weapon_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Vital_Weapon_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Vocal_Was_Sogolon_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Wailing_Weapon_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Wanderlust_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Warmonger%27s_Weapon_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Weapon_of_Aggression_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Weapon_of_Fury_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Weapon_of_Quickening_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Weapon_of_Remedy_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Weapon_of_Renewal_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Weapon_of_Shadow_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Weapon_of_Warding_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Wielder%27s_Boon_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Wielder%27s_Remedy_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Wielder%27s_Strike_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Wielder%27s_Zeal_(large).jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Xinrae%27s_Weapon_(large).jpg", {
        profession: "ritualist",
      }),

      makeSkill("/wiki/File:Weapons_of_Three_Forges.jpg", {
        profession: "ritualist",
      }),
      makeSkill("/wiki/File:Summon_Spirits.jpg", { profession: "ritualist" }),
      makeSkill("/wiki/File:Vampirism.jpg", { profession: "ritualist" }),
    ],
  ],
  [
    "dervish",
    [
      makeSkill("/wiki/File:Arcane_Zeal_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Armor_of_Sanctity_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Attacker%27s_Insight_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Aura_of_Thorns_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Aura_Slicer_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Avatar_of_Balthazar_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Avatar_of_Dwayna_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Avatar_of_Grenth_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Avatar_of_Lyssa_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Avatar_of_Melandru_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Balthazar%27s_Rage_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Banishing_Strike_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Chilling_Victory_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Conviction_(large).jpg", { profession: "dervish" }),
      makeSkill("/wiki/File:Crippling_Sweep_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Crippling_Victory_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Dust_Cloak_(large).jpg", { profession: "dervish" }),
      makeSkill("/wiki/File:Dwayna%27s_Touch_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Ebon_Dust_Aura_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Enchanted_Haste_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Eremite%27s_Attack_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Eremite%27s_Zeal_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Extend_Enchantments_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Faithful_Intervention_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Farmer%27s_Scythe_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Featherfoot_Grace_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Fleeting_Stability_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Grenth%27s_Aura_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Grenth%27s_Fingers_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Grenth%27s_Grasp_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Guiding_Hands_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Harrier%27s_Grasp_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Harrier%27s_Haste_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Heart_of_Fury_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Heart_of_Holy_Flame_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Imbue_Health_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Intimidating_Aura_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Irresistible_Sweep_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Lyssa%27s_Assault_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Lyssa%27s_Haste_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Meditation_(large).jpg", { profession: "dervish" }),
      makeSkill("/wiki/File:Mirage_Cloak_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Mystic_Corruption_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Mystic_Healing_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Mystic_Regeneration_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Mystic_Sandstorm_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Mystic_Sweep_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Mystic_Twister_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Mystic_Vigor_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Natural_Healing_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Onslaught_(large).jpg", { profession: "dervish" }),
      makeSkill("/wiki/File:Pious_Assault_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Pious_Concentration_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Pious_Fury_(large).jpg", { profession: "dervish" }),
      makeSkill("/wiki/File:Pious_Haste_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Pious_Renewal_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Pious_Restoration_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Radiant_Scythe_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Reap_Impurities_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Reaper%27s_Sweep_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Rending_Aura_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Rending_Sweep_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Rending_Touch_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Sand_Shards_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Shield_of_Force_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Signet_of_Mystic_Speed_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Signet_of_Pious_Light_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Signet_of_Pious_Restraint_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Staggering_Force_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Test_of_Faith_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Twin_Moon_Sweep_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Veil_of_Thorns_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Victorious_Sweep_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Vital_Boon_(large).jpg", { profession: "dervish" }),
      makeSkill("/wiki/File:Vow_of_Piety_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Vow_of_Silence_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Vow_of_Strength_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Watchful_Intervention_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Wearying_Strike_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Whirling_Charge_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Winds_of_Disenchantment_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Wounding_Strike_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Zealous_Renewal_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Zealous_Sweep_(large).jpg", {
        profession: "dervish",
      }),
      makeSkill("/wiki/File:Zealous_Vow_(large).jpg", {
        profession: "dervish",
      }),

      makeSkill("/wiki/File:Vow_of_Revolution.jpg", { profession: "dervish" }),
      makeSkill("/wiki/File:Aura_of_Holy_Might.jpg", { profession: "dervish" }),
      makeSkill("/wiki/File:Eternal_Aura.jpg", { profession: "dervish" }),
    ],
  ],
  [
    "paragon",
    [
      makeSkill("/wiki/File:%22Brace_Yourself!%22_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:%22Can%27t_Touch_This!%22_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:%22Fall_Back!%22_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:%22Find_Their_Weakness!%22_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:%22Go_for_the_Eyes!%22_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:%22Help_Me!%22_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:%22Incoming!%22_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:%22It%27s_just_a_flesh_wound.%22_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:%22Lead_the_Way!%22_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:%22Make_Haste!%22_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:%22Make_Your_Time!%22_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:%22Never_Give_Up!%22_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:%22Never_Surrender!%22_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:%22Stand_Your_Ground!%22_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:%22The_Power_Is_Yours!%22_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:%22They%27re_on_Fire!%22_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:%22We_Shall_Return!%22_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Aggressive_Refrain_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Angelic_Bond_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Angelic_Protection_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Anthem_of_Disruption_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Anthem_of_Envy_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Anthem_of_Flame_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Anthem_of_Fury_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Anthem_of_Guidance_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Anthem_of_Weariness_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Aria_of_Restoration_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Aria_of_Zeal_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Awe_(large).jpg", { profession: "paragon" }),
      makeSkill("/wiki/File:Ballad_of_Restoration_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Barbed_Spear_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Bladeturn_Refrain_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Blazing_Finale_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Blazing_Spear_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Burning_Refrain_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Burning_Shield_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Cautery_Signet_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Chest_Thumper_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Chorus_of_Restoration_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Crippling_Anthem_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Cruel_Spear_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Defensive_Anthem_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Disrupting_Throw_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Enduring_Harmony_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Energizing_Chorus_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Energizing_Finale_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Finale_of_Restoration_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Focused_Anger_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Glowing_Signet_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Godspeed_(large).jpg", { profession: "paragon" }),
      makeSkill("/wiki/File:Harrier%27s_Toss_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Hasty_Refrain_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Hexbreaker_Aria_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Holy_Spear_(large).jpg", { profession: "paragon" }),
      makeSkill("/wiki/File:Inspirational_Speech_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Leader%27s_Comfort_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Leader%27s_Zeal_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Lyric_of_Purification_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Lyric_of_Zeal_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Maiming_Spear_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Mending_Refrain_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Merciless_Spear_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Mighty_Throw_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Natural_Temper_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Purifying_Finale_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Remedy_Signet_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Signet_of_Aggression_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Signet_of_Return_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Signet_of_Synergy_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Slayer%27s_Spear_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Soldier%27s_Fury_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Song_of_Concentration_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Song_of_Power_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Song_of_Purification_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Song_of_Restoration_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Spear_of_Lightning_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Spear_of_Redemption_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Spear_Swipe_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Stunning_Strike_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Swift_Javelin_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Unblockable_Throw_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Vicious_Attack_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Wearying_Spear_(large).jpg", {
        profession: "paragon",
      }),
      makeSkill("/wiki/File:Wild_Throw_(large).jpg", { profession: "paragon" }),
      makeSkill("/wiki/File:Zealous_Anthem_(large).jpg", {
        profession: "paragon",
      }),

      makeSkill("/wiki/File:Heroic_Refrain.jpg", { profession: "paragon" }),
      makeSkill("/wiki/File:Spear_of_Fury.jpg", { profession: "paragon" }),
      makeSkill("/wiki/File:%22There%27s_Nothing_to_Fear!%22.jpg", {
        profession: "paragon",
      }),
    ],
  ],
]);

export default database;

export const common_skills_database = [
  //makeSkill("/wiki/File:Signet_of_Capture.jpg", { is_global_pve_skill: true }),
  //makeSkill("/wiki/File:Lightbringer_Signet.jpg", { is_global_pve_skill: true }),
  //makeSkill("/wiki/File:Lightbringer%27s_Gaze.jpg", { is_global_pve_skill: true }),
  //makeSkill("/wiki/File:Resurrection_Signet.jpg", { is_global_pve_skill: true }),
]

export const pve_database = [
  

  

  makeSkill("/wiki/File:Air_of_Superiority.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Asuran_Scan.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Mental_Block.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Mindbender.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Pain_Inverter.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Radiation_Field.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Smooth_Criminal.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Summon_Ice_Imp.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Summon_Mursaat.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Summon_Naga_Shaman.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Summon_Ruby_Djinn.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Technobabble.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:%22By_Ural%27s_Hammer!%22.jpg", {
    is_global_pve_skill: true,
  }),
  makeSkill("/wiki/File:%22Don%27t_Trip!%22.jpg", {
    is_global_pve_skill: true,
  }),
  makeSkill("/wiki/File:Alkar%27s_Alchemical_Acid.jpg", {
    is_global_pve_skill: true,
  }),
  makeSkill("/wiki/File:Black_Powder_Mine.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Brawling_Headbutt.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Breath_of_the_Great_Dwarf.jpg", {
    is_global_pve_skill: true,
  }),
  makeSkill("/wiki/File:Drunken_Master.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Dwarven_Stability.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Ear_Bite.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Great_Dwarf_Armor.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Great_Dwarf_Weapon.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Light_of_Deldrimor.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Low_Blow.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Snow_Storm.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Deft_Strike.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Ebon_Battle_Standard_of_Courage.jpg", {
    is_global_pve_skill: true,
  }),
  makeSkill("/wiki/File:Ebon_Battle_Standard_of_Honor.jpg", {
    is_global_pve_skill: true,
  }),
  makeSkill("/wiki/File:Ebon_Battle_Standard_of_Wisdom.jpg", {
    is_global_pve_skill: true,
  }),
  makeSkill("/wiki/File:Ebon_Escape.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Ebon_Vanguard_Assassin_Support.jpg", {
    is_global_pve_skill: true,
  }),
  makeSkill("/wiki/File:Ebon_Vanguard_Sniper_Support.jpg", {
    is_global_pve_skill: true,
  }),
  makeSkill("/wiki/File:Signet_of_Infection.jpg", {
    is_global_pve_skill: true,
  }),
  makeSkill("/wiki/File:Sneak_Attack.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Tryptophan_Signet.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Weakness_Trap.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Winds.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:%22Dodge_This!%22.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:%22Finish_Him!%22.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:%22I_Am_Unstoppable!%22.jpg", {
    is_global_pve_skill: true,
  }),
  makeSkill("/wiki/File:%22I_Am_the_Strongest!%22.jpg", {
    is_global_pve_skill: true,
  }),
  makeSkill("/wiki/File:%22You_Are_All_Weaklings!%22.jpg", {
    is_global_pve_skill: true,
  }),
  makeSkill("/wiki/File:%22You_Move_Like_a_Dwarf!%22.jpg", {
    is_global_pve_skill: true,
  }),
  makeSkill("/wiki/File:A_Touch_of_Guile.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Club_of_a_Thousand_Bears.jpg", {
    is_global_pve_skill: true,
  }),
  makeSkill("/wiki/File:Feel_No_Pain.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Raven_Blessing.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Ursan_Blessing.jpg", { is_global_pve_skill: true }),
  makeSkill("/wiki/File:Volfen_Blessing.jpg", { is_global_pve_skill: true }),
];

// use the following line(s) to easily log a full list of all the skills:
// console.log(
//   Array.from(database.entries()).map((s) => ({
//     profession: s[0],
//     skills: s[1],
//   }))
// );
