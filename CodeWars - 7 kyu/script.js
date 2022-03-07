'use strict';

// Population growth

function getYears(initial, percent, migration, target) {
  const clearPercent = percent / 100;
  let yearPer = initial;
  let res = 0;

  while (yearPer < target) {
    yearPer = Math.floor(yearPer + yearPer * clearPercent + migration);
    res += 1;
  }

  return res;
}


console.log( getYears(200, 8, 15, 231) ); // = 1;
console.log( getYears(1000, 2, 50, 1200) ); // = 3;
console.log( getYears(1500, 5, 100, 5000) ); // = 15;
console.log( getYears(600, 3, 0, 1000) ); // = 18;