import { generateColorCombinations } from "../misaligned.js";
import { expect } from "chai";

let colorCombinationsResult = generateColorCombinations();

// Capture console.log output
let loggedOutput = [];
console.log = (output) => loggedOutput.push(output);

colorCombinationsResult.forEach((colorCombination) =>
  console.log(colorCombination)
);

expect(loggedOutput.length).equals(25);

// Test for misalignments
loggedOutput.forEach((colorCombination) => {
  let colorParts = colorCombination.split("|");

  expect(colorParts[0].length).equals(4); // This will fail if the numeric value is not aligned with the separator

  expect(colorParts[1].length).equals(7); // This will fail iif the majorColor is not aligned with the separator

  expect(colorParts[2].length).equals(7); // This will fail if the minorColor is not aligned with the separator
});

console.log("All is well (maybe!)");
