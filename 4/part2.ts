import { readFileSync } from "node:fs";
import { isXmas } from "./isXmas.ts";

// Read entire input file into memory
const inputFile = readFileSync("./input.txt").toString();

// Split apart the file into individual lines ["row1", "row2" ...]
const allValues = inputFile.split("\r\n");

const graph: string[][] = [];

allValues.forEach((row, index) => {
  const rowAsCharArray = row.split("");
  graph[index] = rowAsCharArray;
});

/**
 * Part 2
 * An X-MAS can be 1 of 4 iterations, each 3x3
 * M.M  M.S  S.M  S.S
 * .A.  .A.  .A.  .A.
 * S.S  M.S  S.M  M.M
 */

// Split graph into 3x3 chunks
let validXmas = 0;

for (let row = 0; row <= graph.length - 3; row++) {
  for (let column = 0; column <= graph[row].length - 3; column++) {
    const testGraph: string[][] = [[], [], []];
    testGraph[0].push(graph[row][column]);
    testGraph[0].push(graph[row][column + 1]);
    testGraph[0].push(graph[row][column + 2]);
    testGraph[1].push(graph[row + 1][column]);
    testGraph[1].push(graph[row + 1][column + 1]);
    testGraph[1].push(graph[row + 1][column + 2]);
    testGraph[2].push(graph[row + 2][column]);
    testGraph[2].push(graph[row + 2][column + 1]);
    testGraph[2].push(graph[row + 2][column + 2]);

    if (isXmas(testGraph)) {
      validXmas++;
    }
  }
}

console.log(validXmas);
