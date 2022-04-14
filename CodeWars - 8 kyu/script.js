'use strict';

// Count occurrences

function countOccurrences(phrase, part) {
  return phrase.split(part).length - 1;
}

console.log("🔥 => countOccurrences('azyxxzyzy', 'zy')", countOccurrences('azyxxzyzy', 'zy')); // === 3
console.log("🔥 => countOccurrences('ababagalamaga', 'bag')", countOccurrences('ababagalamaga', 'bag')); // === 1