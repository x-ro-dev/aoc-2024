import { expect } from "jsr:@std/expect";
import { Direction, direction } from "./direction.ts";
import { isSafe } from "./isSafe.ts";

Deno.test("check direction", () => {
  expect(direction(0, 0)).toBe(Direction.Unset);
  expect(direction(0, 5)).toBe(Direction.Decreasing);
  expect(direction(5, 0)).toBe(Direction.Increasing);
});

Deno.test("is safe", () => {
  expect(isSafe(["1", "2", "3"])).toBe(true);
  expect(isSafe(["1", "21", "30"])).toBe(false);
  expect(isSafe(["1", "2", "2", "3"])).toBe(false);
});
