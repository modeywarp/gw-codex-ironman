import type { BuildGenOptions } from ".";
import type { Skillset, SkillsetEntry } from "../../stores/builds";
import type { Skillbar } from "../../stores/skillbar";
import type { SkillOrigin } from "../codegen/subgroups/campaigns";
import { ALL_ELEMENTALIST_ELEMENTS } from "../codegen/subgroups/element";
import { all_global_pve_skills } from "../codegen/subgroups/pve-only";
import { ALL_WARRIOR_WEAPON_TYPES } from "../codegen/subgroups/weapons";
import type { Outpost } from "../outposts";
import type { Profession } from "../professions";
import { Rng } from "../rng";
import skills, { common_skills_database, pve_database, type Skill } from "../skills";
import { setCachedBuild } from "./cache";

export class BuildGenerator {
  private rng: Rng;

  /**
   * unlike the regular `this.rng`, this one is seeded using the character name
   * and the outpost but NOT the profession. So it can be used in special cases
   * where a profession doesn't change the outcome of the RNG.
   */
  private rng_profession_independent: Rng;

  private available_skills: Skill[];
  private subsets: {
    regulars: Skill[];
    selfheals: Skill[];
    elites: Skill[];
    profession_pves: Skill[];
    global_pves: Skill[];
    defensives: Skill[];
    offensives: Skill[];
  };

  private skillset: Set<Skill> = new Set();
  private disabled_skills: Set<Skill> = new Set();

  private inherited_skills_count: number = 0;
  private hero_build_mode: boolean = false;

  constructor(
    character_name: string,
    outpost: Outpost,
    profession: Profession,
    options: BuildGenOptions,
    available_skill_origins: Set<SkillOrigin>
  ) {
    this.hero_build_mode = options.is_hero_build;
    this.available_skills = skills
      .get(profession)
      .filter((skill) => available_skill_origins.has(skill.options.origin))
      .filter(
        (skill) =>
          options.is_primary_profession || !skill.options.is_primary_attribute
      );

    this.rng = new Rng(
      `${character_name.toLowerCase()}-${outpost.link}-${profession}`
    );
    this.rng_profession_independent = new Rng(
      `${character_name.toLowerCase()}-${outpost.link}`
    );

    // if the profession is warrior, then we pick a random weapon mastery and
    // exclude the other ones to make it easier for them to craft builds:
    if (profession === "warrior") {
      const picked_weapon = ALL_WARRIOR_WEAPON_TYPES.at(
        this.rng.nextRange(ALL_WARRIOR_WEAPON_TYPES.length)
      );

      this.available_skills = this.available_skills.filter(
        (skill) =>
          skill.options.warrior_weapon_type === null ||
          skill.options.warrior_weapon_type === picked_weapon
      );
    }
    // elementalists get AT MOST 2 elements at once
    else if (profession === "elementalist") {
      let available_elements = new Set(ALL_ELEMENTALIST_ELEMENTS);

      const max_elements_count = this.hero_build_mode ? 2 : 3;

      while (available_elements.size > max_elements_count) {
        const elements_arr = Array.from(available_elements.values());
        const index = this.rng.nextRange(elements_arr.length);
        const element_to_remove = elements_arr[index];

        available_elements.delete(element_to_remove);
      }

      this.available_skills = this.available_skills.filter(
        (skill) =>
          skill.options.elementalist_element === null ||
          available_elements.has(skill.options.elementalist_element)
      );
    }

    this.subsets = {
      regulars: this.available_skills.filter(
        (s) => !s.options.is_elite && !s.options.is_profession_pve_skill
      ),
      selfheals: this.available_skills.filter(
        (s) => !s.options.is_elite && s.options.is_self_heal
      ),
      defensives: this.available_skills.filter(
        (s) => s.options.is_defensive && !s.options.is_elite
      ),
      offensives: this.available_skills.filter(
        (s) => s.options.is_offensive && !s.options.is_elite
      ),
      elites: this.available_skills.filter((s) => s.options.is_elite),
      profession_pves: this.available_skills.filter(
        (s) => s.options.is_profession_pve_skill
      ),
      global_pves: available_skill_origins.has("PVE")
        ? pve_database.filter((s) => s.options.is_global_pve_skill)
        : [],
    };
  }

  /**
   * if enabled it changes the generation rules to return a skill pool of exactly
   * 8 skills so that it can be used as a full skillbar
   */
  public withHeroMode(enabled: boolean): BuildGenerator {
    this.hero_build_mode = enabled;

    return this;
  }

  public withSelfHeals(count: number): BuildGenerator {
    if (this.subsets.selfheals.length <= 0) {
      return this;
    }

    return this.addSubsetSkillsToSkillset(this.subsets.selfheals, count);
  }

  public withRegularSkills(count: number): BuildGenerator {
    return this.addSubsetSkillsToSkillset(
      this.subsets.regulars,
      Math.max(count - this.inherited_skills_count, 0)
    );
  }

  public withElites(is_primary_profession: boolean): BuildGenerator {
    if (this.subsets.elites.length <= 0 || !is_primary_profession) {
      return this;
    }

    const count = this.rng.nextRange(6, 3);

    return this.addSubsetSkillsToSkillset(this.subsets.elites, count);
  }

  /**
   * Potentially add guaranted defensive skills to the build.
   *
   * A build is not guaranted to get defensive skills depending on whether it is
   * from a primary or secondary profession.
   */
  public withDefensiveSkills(
    is_primary_profession: boolean,
    is_hardmode: boolean,
    count: number
  ): BuildGenerator {
    const primary_has_defensive =
      this.rng_profession_independent.nextRange(10) < 5;

    // the guaranted defensive skills are randomly set to either the primary or
    // the secondary profession.
    //
    // but this can only happen in normal mode, in hardmode both professions
    // have the guaranted skills
    if (!is_hardmode && !this.hero_build_mode) {
      if (
        (primary_has_defensive && !is_primary_profession) ||
        (!primary_has_defensive && is_primary_profession)
      ) {
        return this;
      }
    }

    return this.addSubsetSkillsToSkillset(this.subsets.defensives, count);
  }

  public withOffensiveSkills(
    is_primary_profession: boolean,
    count: number
  ): BuildGenerator {
    const primary_has_offensive =
      this.rng_profession_independent.nextRange(10) < 5;

    // the guaranted defensive skills are randomly set to either the primary or
    // the secondary profession.
    if (
      (primary_has_offensive && !is_primary_profession) ||
      (!primary_has_offensive && is_primary_profession)
    ) {
      return this;
    }

    return this.addSubsetSkillsToSkillset(this.subsets.offensives, count);
  }

  /**
   * Certain professions inherit guaranted skills in order to unlock the usage of
   * other skills. For example:
   * - necromancers inherit one summon
   * - ritualists inherit one binding ritual
   * - rangers get Charm Animal
   * - assassins get a lead & an off-hand attack
   */
  public withInheritedSkills(profession: Profession, is_primary_profession: boolean, is_hero_build: boolean): BuildGenerator {
    if (profession === "assassin") {
      this.addSubsetSkillsToSkillset(
        this.subsets.regulars.filter((s) => s.options.is_lead_attack),
        1
      );
      this.addSubsetSkillsToSkillset(
        this.subsets.regulars.filter((s) => s.options.is_offhand_attack),
        1
      );

      this.inherited_skills_count = 2;
    } else if (profession === "ritualist") {
      this.addSubsetSkillsToSkillset(
        this.subsets.regulars.filter((s) => s.options.is_binding_ritual),
        1
      );

      this.inherited_skills_count = 1;
    } else if (profession === "necromancer") {
      this.addSubsetSkillsToSkillset(
        this.subsets.regulars.filter((s) => s.options.is_minion),
        1
      );

      this.inherited_skills_count = 1;
    } else if (profession === "ranger") {
      this.addSubsetSkillsToSkillset(
        this.subsets.regulars.filter((s) => s.options.is_pet_summon),
        1
      );

      this.inherited_skills_count = 1;
    } else if (profession === "monk") {
      this.addSubsetSkillsToSkillset(
        this.subsets.regulars.filter((s) => s.options.is_resurrection),
        1
      );

      this.inherited_skills_count = 1;
    }

    if (!is_hero_build && is_primary_profession) {
      this.addSubsetSkillsToSkillset(
        this.getGuaranteedSkills(),
        Infinity
      );
    }

    return this;
  }

  public withProfessionPveSkills(count: number): BuildGenerator {
    return this.addSubsetSkillsToSkillset(this.subsets.profession_pves, count);
  }

  public withGlobalPveSkills(count: number): BuildGenerator {
    return this.addSubsetSkillsToSkillset(this.subsets.global_pves, count);
  }

  public withDisabledSkills(penalty: number): BuildGenerator {
    if (penalty <= 0) {
      return this;
    }

    const is_whitelisted = (skill: Skill) =>
      skill.options.is_global_pve_skill ||
      skill.options.is_profession_pve_skill;
    const skills_to_disable = Array.from(this.skillset)
      .filter((s) => !this.disabled_skills.has(s))
      .filter((s) => !is_whitelisted(s));

    if (!skills_to_disable.length) {
      return this;
    }

    const branch_rng = this.rng.branch();

    const hasAnySelfHealLeft = () =>
      skills_to_disable.some(
        (s) => s.options.is_self_heal && !s.options.is_elite
      );
    const hasAnyEliteLeft = () =>
      skills_to_disable.some((s) => s.options.is_elite);

    for (let i = 0; i < penalty; i += 1) {
      const skill_index = branch_rng.nextRange(skills_to_disable.length);

      // important detail here, the `skills_disable` is mutated with splice
      // and the skill we get here is extracted out of the array.
      const slice = skills_to_disable.splice(skill_index, 1);

      if (!slice.length) {
        continue;
      }

      const skill = slice[0];

      // but it's possible we don't even add this skill to the list of disabled
      // skills yet we leave it out of the array to ensure it won't be selected
      // again in future iterations.
      const should_not_remove =
        (skill.options.is_self_heal && !hasAnySelfHealLeft()) ||
        (skill.options.is_elite && !hasAnyEliteLeft());

      if (!should_not_remove) {
        this.disabled_skills.add(skill);
      }
    }

    return this;
  }

  public build(cache_key: string): Skillset {
    const skills_array = Array.from(this.skillset);

    const skillset = new Set(
      skills_array.map((skill) => ({
        ...skill,
        disabled: this.disabled_skills.has(skill),
      }))
    );

    setCachedBuild(cache_key, skillset);

    return skillset;
  }

  /**
   * returns the current size of the skillset
   */
  public getSkillsetSize(): number {
    return this.skillset.size;
  }

  public getInhreitedSkillsCount(): number {
    return this.inherited_skills_count;
  }

  public getRandRange(max: number): number {
    return this.rng.nextRange(max);
  }

  private getGuaranteedSkills(): Skill[] {
    return common_skills_database;
  }

  private addSubsetSkillsToSkillset(
    subset: Skill[],
    count: number
  ): BuildGenerator {
    if (this.hero_build_mode) {
      const skills_left = 8 - this.getSkillsetSize();

      count = Math.min(count, skills_left);
    }

    if (count <= 0) {
      return this;
    }

    const clamped_count = Math.min(subset.length, count);
    const target_size = this.skillset.size + clamped_count;
    let shortcircuit = 100;

    while (this.skillset.size < target_size && shortcircuit--) {
      const skill_index = this.rng.nextRange(subset.length);
      const skill = subset.at(skill_index);

      if (this.skillset.has(skill)) {
        continue;
      }

      this.skillset.add(skill);
    }

    return this;
  }
}

export function skillsetEntriesToSingleProfessionSkillbar(
  profession: Profession,
  skills: SkillsetEntry[]
): Skillbar {
  const output: Skillbar = new Map();

  for (let i = 0; i < skills.length; i += 1) {
    output.set(i, { profession, skill: skills[i] });
  }

  return output;
}
