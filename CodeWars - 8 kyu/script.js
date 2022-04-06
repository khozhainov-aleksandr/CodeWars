'use strict';

// Gradually adding

function add(...nums) {
  const a = nums
    .map((el, i) => (el + el * i))
    .reduce((sum, el) => sum + el, 0);

  return a;
}

add() === 0
add(2, 3, 4) === 20 // 2 * 1 + 3 * 2 + 4 * 3 = 20
add(1, 4, -5, 5) === 14 // 1 * 1 + 4 * 2 - 5 * 3 + 5 * 4 = 14