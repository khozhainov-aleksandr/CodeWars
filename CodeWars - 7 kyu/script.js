'use strict';

// Calculate averages

const calculator = {
  average: function(...res) {
    if (res.toString() === '') {
      return 0;
    }

    return res.reduce((sum, el) => sum + el) / res.length;
  },
};

console.log( calculator.average() ); // === 0
console.log( calculator.average(1, 2, 3) ); // === 2
console.log( calculator.average(-3, -1, 0, 1) ); // === -0.75