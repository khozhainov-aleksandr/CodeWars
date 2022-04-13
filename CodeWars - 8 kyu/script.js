'use strict';

// Add to number

function addToNumber(x) {
  return (y) => {
    return x + y;
  };
}

console.log("🔥 => addToNumber(1)(2)", addToNumber(1)(2)); // === 3
console.log("🔥 => addToNumber(0)(-4)", addToNumber(0)(-4)); // === -4
console.log("🔥 => addToNumber(10)()", addToNumber(10)()); // === NaN