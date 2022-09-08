'use strict';

// Transportation on vacation

function rentalCarCost(d) {
  const oneDay = 40;
  const sale7days = 50;
  const sale3days = 20;
  let res = 0;

  res = d * oneDay;

  if (d >= 3) {
    res -= sale3days;
  }

  if (d >= 7) {
    res = res + sale3days - sale7days
  }

  return res;
}

console.log('1', rentalCarCost(1)); // 40
console.log('2', rentalCarCost(2)); // 80
console.log('3', rentalCarCost(3)); // 100
console.log('4', rentalCarCost(4)); // 140
console.log('7', rentalCarCost(7)); // 230
console.log('8', rentalCarCost(8)); // 270
console.log('9', rentalCarCost(9)); // 310
console.log('10', rentalCarCost(10)); // 350