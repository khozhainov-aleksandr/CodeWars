'use strict';

// Count matching socks

function countMatchingSocks(colors) {
  const obj = {};

  colors.forEach(element => {
    obj[element] = (obj[element] || 0) + 1;
  });

  let sum = Object.values(obj)
    .filter(el => el > 1)
    .reduce((sum, el) => sum + el, 0);

  return Math.trunc(sum / 2);
}

console.log( countMatchingSocks([10, 10]) ); // - одна пара носков цвета 10.
console.log( countMatchingSocks([2, 2, 2, 2, 2]) ); // - две пары носков цвета 2.
console.log( countMatchingSocks([10, 20, 30, 40, 50, 60]) ); // - все носки разного цвета, ни одной пары.
console.log( countMatchingSocks([10, 20, 30, 10, 20, 60]) ); // - 2 пары, одна цвета 10, вторая - 20.