'use strict';

// Get sum of arrays

function getArraySum(...a) {
  const acc = a;

  return (...b) => {
    acc.push(...b);

    return acc.reduce((x, y) => x + y, 0);
  };
}

console.log("🔥 => getArraySum(1)(1)", getArraySum(1)(1)); // === 2 // 1 + 1 = 2
console.log("🔥 => getArraySum(2, 3, 4)(9, 10)", getArraySum(2, 3, 4)(9, 10)); // === 28 // 2 + 3 + 4 + 9 + 10 = 28
console.log("🔥 => getArraySum(1, 0)(1, -1)", getArraySum(1, 0)(1, -1)); // === 1 // 1 + 0 + 1 - 1 = 1