import { expect } from "jsr:@std/expect";
import { isXmas } from "./isXmas.ts";

const MM = [
  ["M", "f", "M"],
  ["e", "A", "3"],
  ["S", "1", "S"],
];

const SM = [
  ["S", "b", "M"],
  ["n", "A", "5"],
  ["S", "4", "M"],
];

const notValid = [
  ["g", "f", "M"],
  ["e", "A", "3"],
  ["S", "1", "4"],
];

Deno.test("is an x-mas", () => {
  expect(isXmas(MM)).toBe(true);
  expect(isXmas(notValid)).toBe(false);
  expect(isXmas(SM)).toBe(true);
});
