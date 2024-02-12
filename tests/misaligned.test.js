import {
  generateColorCombinations,
  generateColorNumber,
} from "../misaligned.js";
import { expect } from "chai";

// Test for color number generation
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    let colorNumber = generateColorNumber(i, j);
    expect(colorNumber).to.be.within(1, 26); // 26 because it includes heading
  }
}

let colorCombinationsResult = generateColorCombinations();

// Capture console.log output
let loggedOutput = [];
let originalLog = console.log; // Store the original console.log function
console.log = (output) => loggedOutput.push(output);

colorCombinationsResult.forEach((colorCombination) =>
  console.log(colorCombination)
);

expect(loggedOutput.length).equals(27);

// Test for misalignments
let separatorPositions = [];
loggedOutput.forEach((colorCombination, index) => {
  let separatorIndices = [];
  let trimmedCombination = colorCombination.trimStart(); // To ignore leading spaces
  for (let i = 0; i < trimmedCombination.length; i++) {
    if (trimmedCombination[i] === "|") {
      separatorIndices.push(i);
    }
  }
  if (index === 1) {
    // Capture the positions from the second row
    separatorPositions = separatorIndices;
  } else if (index > 1) {
    // Checking from the third row
    expect(separatorIndices).to.deep.equal(separatorPositions);
  }
});

expect(loggedOutput[0]).to.equal(
  "\n|" +
    " ".repeat(6) +
    "Color Coding Reference Manual" +
    " ".repeat(6) +
    "|\n" +
    "-".repeat(43),
  "Expected heading not found in the reference manual"
);

console.log = originalLog; // Reset console.log to original functionality
console.log(loggedOutput.join("\n"));
console.log("All is well (maybe!)");
