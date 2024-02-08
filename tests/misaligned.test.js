import {
  generateColorCombinations,
  generateColorNumber,
} from "../misaligned.js";
import { expect } from "chai";

// Test for color number generation
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    let colorNumber = generateColorNumber(i, j);
    expect(colorNumber).to.be.within(1, 25); // This will fail because, currently range is (0, 24)
  }
}

let colorCombinationsResult = generateColorCombinations();

// Capture console.log output
let loggedOutput = [];
console.log = (output) => loggedOutput.push(output);

colorCombinationsResult.forEach((colorCombination) =>
  console.log(colorCombination)
);

expect(loggedOutput.length).equals(25);

// Test for misalignments
let separatorPositions = [];
loggedOutput.forEach((colorCombination, index) => {
  let separatorIndices = [];
  for (let i = 0; i < colorCombination.length; i++) {
    if (colorCombination[i] === "|") {
      separatorIndices.push(i);
    }
  }
  if (index === 0) {
    separatorPositions = separatorIndices;
  } else {
    expect(separatorIndices).to.deep.equal(separatorPositions);
  }
});

console.log("All is well (maybe!)");
