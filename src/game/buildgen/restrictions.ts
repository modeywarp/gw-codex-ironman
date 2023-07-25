/**
 * the key is the players count, the value is the penalty for that count
 */
const PENALTY_TABLE = {
  1: 0,
  2: 1,
  3: 2,
  4: 4,
  5: 6,
  6: 9,
  7: 13,
  8: 18,
  9: 23,
  10: 31,
  11: 37,
  12: 42,
};

export function getSkillPenalty(
  players: number,
  henchmen_count: number = 0,
  is_primary_profession: boolean
): number {
  const total = players + henchmen_count;
  const x = Math.max(total - Number(is_primary_profession), 0);
  const penalty = PENALTY_TABLE[x] || 0;

  return penalty + Math.max(henchmen_count, 0);
}
