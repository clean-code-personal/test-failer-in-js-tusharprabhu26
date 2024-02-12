export function generateColorNumber(majorIndex, minorIndex) {
  return majorIndex * 5 + minorIndex + 1;  // to start index from 1
}

export function generateColorCombinations() {
  const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
  const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
  let colorCombinationsList = [
    "\n|" +
      " ".repeat(6) +
      "Color Coding Reference Manual" +
      " ".repeat(6) +
      "|\n" +
      "-".repeat(43),
    "| Pair Number | Major Color | Minor Color |\n" + "-".repeat(43)
  ]; // headings
  let pairNumber = 1;
  for (let majorIndex = 0; majorIndex < majorColors.length; majorIndex++) {
    for (let minorIndex = 0; minorIndex < minorColors.length; minorIndex++) {
      let colorNumber = generateColorNumber(majorIndex, minorIndex);
      colorCombinationsList.push(
        `| ${colorNumber.toString().padEnd(11)} | ${majorColors[
          majorIndex
        ].padEnd(11)} | ${minorColors[minorIndex].padEnd(11)} |`
      );
      pairNumber++;
    }
  }
  return colorCombinationsList;
}
