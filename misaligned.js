export function generateColorNumber(majorIndex, minorIndex) {
  return majorIndex * 5 + minorIndex;
}

export function generateColorCombinations() {
  const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
  const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
  let colorCombinationsList = [];
  for (let majorIndex = 0; majorIndex < majorColors.length; majorIndex++) {
    for (let minorIndex = 0; minorIndex < minorColors.length; minorIndex++) {
      let colorNumber = generateColorNumber(majorIndex, minorIndex);
      let colorCombination = `${colorNumber} | ${majorColors[majorIndex]} | ${minorColors[minorIndex]}`;
      colorCombinationsList.push(colorCombination);
    }
  }
  return colorCombinationsList;
}
