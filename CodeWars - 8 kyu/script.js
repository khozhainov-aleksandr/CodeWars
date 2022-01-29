'use strict';

// Sum without highest and lowest number

function sumArray(array) {
    if (Array.isArray(array) && array.length > 1) {
      return array.reduce((sum, el) => (sum + el), 0) - ( Math.min(...array) + Math.max(...array) ); 
    } else {
      return 0;
    }
}

console.log(sumArray(null)); // 0
console.log(sumArray([ 0, 1, 6, 10, 10 ])); // 17
console.log(sumArray([ -6, -20, -1, -10, -12 ])); // -28