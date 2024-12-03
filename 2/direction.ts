export enum Direction {
  Unset,
  Increasing,
  Decreasing,
}

export function direction(value1: number, value2: number) {
  const difference = value1 - value2;

  if (difference < 0) {
    return Direction.Decreasing;
  }
  if (difference > 0) {
    return Direction.Increasing;
  }

  return Direction.Unset;
}
