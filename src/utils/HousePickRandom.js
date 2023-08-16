const possibleValues = ["Lizard", "Paper", "Rock", "Scissors", "Spock"];

export default function housePickRandom() {
  return possibleValues[Math.floor(Math.random() * possibleValues.length)];
}
