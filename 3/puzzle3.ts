import { readFileSync } from "node:fs";

// Read entire input file into memory
const inputFile = readFileSync("./input3.txt").toString();

const mulMatches = inputFile.match(/mul\([0-9]{1,3},[0-9]{1,3}\)/gm);

let result = 0;

mulMatches?.forEach((mulString) => {
  const value1 = Number(mulString.match(/[0-9]{1,3}/));
  // Matches have already been captured to have a 2nd value
  const value2 = Number(mulString.match(/,[0-9]{1,3}/)![0].match(/[0-9]{1,3}/));

  result += value1 * value2;
});

console.log(result);

// PART 2
let result2 = 0;
const mulMatches2 = inputFile.matchAll(
  /mul\([0-9]{1,3},[0-9]{1,3}\)|do\(\)|don't\(\)/gm
);
let current = mulMatches2.next();
let mulEnabled = true;
while (current.value) {
  const token = current.value.toString();
  if (token === "don't()") {
    mulEnabled = false;
  } else if (token === "do()") {
    mulEnabled = true;
  } else {
    // must be a mul
    if (mulEnabled) {
      const value1 = Number(token.match(/[0-9]{1,3}/));
      // Matches have already been captured to have a 2nd value
      const value2 = Number(token.match(/,[0-9]{1,3}/)![0].match(/[0-9]{1,3}/));

      result2 += value1 * value2;
    }
  }

  current = mulMatches2.next();
}

console.log(result2);
