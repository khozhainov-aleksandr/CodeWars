'use strict';

// Contain rotations

function containRotations(str, arr) {
  const allStrInArr = [];

  for (let i = 0; i < str.length; i++) {
    const reverse = str.slice(i) + str.slice(0, i);

    allStrInArr.push(reverse);
  }

  return arr.filter(i => allStrInArr.includes(i)).length === allStrInArr.length;
}

console.log( containRotations('', []) ); // === true
console.log( containRotations('abc', []) ); // === false
console.log( containRotations('stRing', ['stRing', 'gstRin', 'ngstRi', 'ingstR', 'Ringst', 'TwshnUh', 'tRings']) ); // === true
console.log( containRotations('Word', ['Word', 'dWor', 'rdoW', 'DroW', 'rrWd']) ); // === false // все вращения строки 'Word' - ['Word', 'ordW', 'rdWo', 'dWor']