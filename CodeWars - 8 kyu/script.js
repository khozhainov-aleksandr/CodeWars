'use strict';

// Group by commas

function groupByCommas(num) {
  const arr = String(num).split('');
  const checkMinus = arr[0];
  const res = [];

  const afterFilter = arr.reverse().filter((el) => el !== '-');

  for (let i = 0; i < afterFilter.length; i++) {
    if (i !== 0 && i % 3 === 0) {
      res.push(',');
    }

    res.push(afterFilter[i]);
  }

  if (checkMinus === '-') {
    return '-' + res.reverse().join('');
  } else {
    return res.reverse().join('');
  }
}

console.log( groupByCommas(1234567) ); // === '1,234,567'
console.log( groupByCommas(-1234567) ); // === '-1,234,567'
console.log( groupByCommas(-123456) ); // === '-123,456'
console.log( groupByCommas(12) ); // === '12'
console.log( groupByCommas(-123) ); // === '-123'