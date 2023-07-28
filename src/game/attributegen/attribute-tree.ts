/**
 * specifies how many points must be invested to go from the given level to the
 * next. The key represents the CURRENT level
 */
export const attribute_cost_for_level = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 7,
  7: 9,
  8: 11,
  9: 13,
  10: 16,
  11: 20,
};

export function getTotalAttributeCostForLevel(level: number): number {
  let total = 0;

  for (let i = 0; i < level; i += 1) {
    total += attribute_cost_for_level[i];
  }

  return total;
}

/**
 *
 * @param points
 * @param maximum_level the maximum level it can reach, the level is never included
 * @returns
 */
export function getHighestPossibleForAttributePoints(
  points: number,
  maximum_level: number = Infinity
): {
  level: number;
  total_cost: number;
  points_left: number;
} {
  let available = points;
  let level = 0;

  while (available > 0 && level < maximum_level) {
    const levelup_cost = attribute_cost_for_level[level];

    if (!levelup_cost) {
      break;
    }

    if (available - levelup_cost < 0) {
      break;
    }

    available -= levelup_cost;
    level += 1;
  }

  const total_cost = getTotalAttributeCostForLevel(level);
  return {
    level,
    total_cost: total_cost,
    points_left: points - total_cost,
  };
}
