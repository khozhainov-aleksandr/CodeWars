'use strict';

// Fix string

function fixString(str) {
  let small = 0;
  let big = 0;

  str.split('').filter(el => el !== ' ').forEach(element => {
    (element === element.toUpperCase()) ? big++ : small++;
  });

  return (big > small) ? str.toUpperCase() : str.toLowerCase();
}

console.log("🔥 => fixString('Mate Academy')", fixString('Mate Academy')); // === 'mate academy'
console.log("🔥 => fixString('Mate ACADEmy')", fixString('Mate ACADEmy')); // === 'MATE ACADEMY'
console.log("🔥 => fixString('maTE')", fixString('maTE')); // === 'mate'