/**
 * the key is the henchmen count, the value is the penalty for that count
 */
const PENALTY_TABLE = {
  1: 0,
  2: 1,
  3: 3,
  4: 5,
  5: 7,
  6: 10,
  7: 14,
  8: 19,
  9: 25,
  10: 31,
  11: 37,
  12: 42,
};

/**
 *
 * @param count the number of players in the group
 * @returns the penalty caused by the players count, the penalty defines how
 * many skills from the pool are disabled.
 */
export function getSkillPenaltyFromPlayersCount(
  count: number,
  is_primary_profession: boolean
): number {
  // the primary profession gets a lower penatly than the secondary one
  const x = Math.max(count - Number(is_primary_profession), 0);

  return PENALTY_TABLE[x] || 0;
}
