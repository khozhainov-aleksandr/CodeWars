'use strict';

// Fix string

function fixString(str) {
  let upper = 0;
  let lower = 0;

  str.split('').forEach(element => {
    if (element.toUpperCase() === element && element !== ' ') {
      upper++;
    } else if (element !== ' ') {
      lower++;
    }
  });

  if (lower >= upper) {
    return str.toLowerCase();
  } else {
    return str.toUpperCase();
  }
}

console.log( fixString('Mate Academy') ); // 'mate academy'
console.log( fixString('Mate ACADEmy') ); // 'MATE ACADEMY'
console.log( fixString('maTE') ); // 'mate'