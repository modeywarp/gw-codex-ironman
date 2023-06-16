/**
 * the key is the henchmen count, the value is the penalty for that count
 */
const PENALTY_TABLE = {
  0: 0,
  1: 1,
  2: 3,
  3: 5,
  4: 7,
  5: 10,
  6: 14,
  7: 19,
  8: 25,
  9: 31,
  10: 37,
  11: 42,
};

/**
 *
 * @param count the number of henchmen or heroes in the group
 * @returns the penalty caused by the henchmen count, the penalty defines how
 * many skills from the pool are disabled.
 */
export function getSkillPenaltyFromHenchmen(
  count: number,
  is_primary_profession: boolean
): number {
  // the primary profession gets a lower penatly than the secondary one
  const x = Math.max(count - Number(is_primary_profession), 0);

  return PENALTY_TABLE[x];
}
