// Observations
// Input is 140x140
// This word search allows words to be horizontal, vertical, diagonal, written backwards, or even overlapping other words
// XMAS can go in any direction
// Graph traversal w/ simple state machine
// Only ever need to go 4 in either direction...
// So, pull 4 in every direction at every node in the graph?

import { readFileSync } from "node:fs";

// Read entire input file into memory
const inputFile = readFileSync("./input.txt").toString();

// Split apart the file into individual lines ["row1", "row2" ...]
const allValues = inputFile.split("\r\n");

const graph: string[][] = [];

allValues.forEach((row, index) => {
  const rowAsCharArray = row.split("");
  graph[index] = rowAsCharArray;
});

let validWords = 0;

for (let row = 0; row < graph.length; row++) {
  for (let column = 0; column < graph[row].length; column++) {
    const canGoRight = graph[row].length - column >= 4;
    const canGoUp = row >= 3;
    const canGoLeft = column >= 3;
    const canGoDown = graph.length - row >= 4;
    // Word builder
    // Take current node, then go 4 values in every direction, for a possibility of 8 words per node
    // Right
    // Cant go right if you are less than 4 from the edge
    // length-column >= 4
    if (canGoRight) {
      const right = [
        graph[row][column],
        graph[row][column + 1],
        graph[row][column + 2],
        graph[row][column + 3],
      ].join("");

      if (right === "XMAS") {
        validWords++;
      }
    }

    // Up-Right
    if (canGoRight && canGoUp) {
      const upRight = [
        graph[row][column],
        graph[row - 1][column + 1],
        graph[row - 2][column + 2],
        graph[row - 3][column + 3],
      ].join("");

      if (upRight === "XMAS") {
        validWords++;
      }
    }

    // Up
    if (canGoUp) {
      const up = [
        graph[row][column],
        graph[row - 1][column],
        graph[row - 2][column],
        graph[row - 3][column],
      ].join("");

      if (up === "XMAS") {
        validWords++;
      }
    }

    // Up-Left
    if (canGoUp && canGoLeft) {
      const upLeft = [
        graph[row][column],
        graph[row - 1][column - 1],
        graph[row - 2][column - 2],
        graph[row - 3][column - 3],
      ].join("");

      if (upLeft === "XMAS") {
        validWords++;
      }
    }

    // Left
    if (canGoLeft) {
      const left = [
        graph[row][column],
        graph[row][column - 1],
        graph[row][column - 2],
        graph[row][column - 3],
      ].join("");

      if (left === "XMAS") {
        validWords++;
      }
    }

    // Down-Left
    if (canGoDown && canGoLeft) {
      const downLeft = [
        graph[row][column],
        graph[row + 1][column - 1],
        graph[row + 2][column - 2],
        graph[row + 3][column - 3],
      ].join("");

      if (downLeft === "XMAS") {
        validWords++;
      }
    }

    // Down
    if (canGoDown) {
      const down = [
        graph[row][column],
        graph[row + 1][column],
        graph[row + 2][column],
        graph[row + 3][column],
      ].join("");

      if (down === "XMAS") {
        validWords++;
      }
    }

    // Down-Right
    if (canGoDown && canGoRight) {
      const downRight = [
        graph[row][column],
        graph[row + 1][column + 1],
        graph[row + 2][column + 2],
        graph[row + 3][column + 3],
      ].join("");

      if (downRight === "XMAS") {
        validWords++;
      }
    }
  }
}

console.log(validWords);
