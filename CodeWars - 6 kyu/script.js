'use strict';

// Average age

const ages = [18, 14, 22, 34, 43, 18, 20, 34, 24];

function getAverageAge(ages) {
  return Math.round(ages.reduce((sum, el) => sum + el) / ages.length);
};

console.log( getAverageAge(ages) ); // === 25