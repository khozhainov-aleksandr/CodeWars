'use strict';

// Inverse robot

function inverseRobot(robot) {
  const arr = Object.entries(robot);
  const duplicateValues = {};

  arr.forEach(element => {
    duplicateValues[element[1]] = (duplicateValues[element[1]] || 0) + 1;
  });

  const amountDuplicateValues = Object.values(duplicateValues);
  if (amountDuplicateValues.some(el => el > 1)) {
    return null;
  }

  const reverseKeyAndValue = arr.map(element => [element[1], element[0]]).reverse();
  return Object.fromEntries(reverseKeyAndValue);
}

const kolli = { Kolli: 'name', 123: 'chipVer', 3: 'wheels' };
const robert = { Robert: 'name', 123: 'chipVer', Alex: 'surname', 113: 'chipVer' };

console.log( inverseRobot(robert) ); // === null
console.log( inverseRobot(kolli) ); // === { name: 'Kolli', chipVer: '123', wheels: '3' }