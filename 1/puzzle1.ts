import { readFileSync } from "node:fs";

// Read entire input file into memory
const inputFile = readFileSync("./input1.txt").toString();

// Split apart the file into individual lines/pairs ["num1   num2", "num3   num4"]
const allValues = inputFile.split("\r\n");
const list1: number[] = [];
const list2: number[] = [];
allValues.forEach((value) => {
  const pair = value.split("   ");
  console.log(pair);
  list1.push(Number(pair[0]));
  list2.push(Number(pair[1]));
});

// Sort list 1/2
list1.sort();
list2.sort();

// Get the "distance" between the pairs
// total += abs(1[index] - 2[index])
let total = 0;

// The lists are equal sizes, add the value of the distance to our final sum
list1.forEach((value1, index) => (total += Math.abs(value1 - list2[index])));

console.log(total);

// PART 2
// Dumbest approach, compare value from list 1 to all values in list 2, if equal, add to total, slow af, but will get the answer
let similarityTotal = 0;

list1.forEach((value1) => {
  list2.forEach((value2) => {
    if (value1 === value2) {
      similarityTotal += value1;
    }
  });
});

console.log(similarityTotal);
