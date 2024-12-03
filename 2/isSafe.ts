import { direction, Direction } from "./direction.ts";

export function isSafe(values: string[]): boolean {
  let currentNumber: number | undefined;

  // Set to False for Part 1 answer
  let currentDirection = Direction.Unset;
  let previousDirection = Direction.Unset;
  let areValuesSafe = true;

  values.forEach((numberAsString) => {
    if (!areValuesSafe) {
      // console.log("Already determined unsafe");
      return;
    }
    const number = Number(numberAsString);
    //RULES
    // The levels are either all increasing or all decreasing.
    // Any two adjacent levels differ by at least one and at most three.

    // We don't have a value to compare to, current number set
    if (currentNumber === undefined) {
      currentNumber = number;
      return;
    } else {
      const difference = currentNumber - number;
      if (difference === 0) {
        // console.log("Difference of 0");
        areValuesSafe = false;
        return;
      }
      currentDirection = direction(currentNumber, number);
      if (previousDirection === Direction.Unset) {
        previousDirection = currentDirection;
      }

      if (previousDirection !== currentDirection) {
        // console.log("Change of direction");
        areValuesSafe = false;
        return;
      }

      const distance = Math.abs(difference);

      if (distance === 1 || distance === 2 || distance === 3) {
        // we good
      } else {
        // console.log("Too big of a distance");
        areValuesSafe = false;
        return;
      }
      currentNumber = number;
    }
  });

  return areValuesSafe;
}
