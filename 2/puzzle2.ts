import { readFileSync } from "node:fs";
import { isSafe } from "./isSafe.ts";

// Read entire input file into memory
const inputFile = readFileSync("./input2.txt").toString();

// Split apart the file into individual lines/pairs ["num1 num2 ... numN", ...]
const allValues = inputFile.split("\r\n");

let totalSafeReports = 0;
allValues.forEach((values) => {
  // console.log("Test Values:", values);

  const numberValues = values.split(" ");
  // isSafe changes the array. :(
  let valuesWereSafe = isSafe([...numberValues]);
  if (valuesWereSafe) {
    // console.log("Safe values:", values);
    totalSafeReports++;
    return;
  } else {
    // console.log("Checking removed items");
    // Check edge cases with no extra life
    numberValues.forEach((_value, index) => {
      if (valuesWereSafe) {
        // Don't continue to parse values
        return;
      }
      const copyOfValues = [...numberValues];
      copyOfValues.splice(index, 1);
      valuesWereSafe = isSafe(copyOfValues);
      if (valuesWereSafe) {
        // console.log("Edge safe values:", values);
        totalSafeReports++;
        return;
      }
    });

    // console.log("Unsafe values:", values);
  }
});

console.log(totalSafeReports);
