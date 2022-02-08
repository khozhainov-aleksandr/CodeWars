'use strict';

// Bank credit

function getYears(amount, percent, limit) {
    const percentByYear = amount * percent / 100;
    let oneYear = amount;
    let year = 0;
  
    if ((oneYear + percentByYear) === limit) {
      return 1;
    }
  
    do {
      oneYear = oneYear + percentByYear;
      year++;
    } while ((limit - 1) > oneYear);
  
    return year - 1;
  }

console.log( getYears(1600, 10, 2000) ); //  === 2 1600 + 160 + 176 < 2000;
console.log( getYears(500, 3, 550) ); //  === 3
console.log( getYears(5000, 5, 6500) ); //  === 5