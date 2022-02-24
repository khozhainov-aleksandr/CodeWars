'use strict';

// Shorten to date

function shortenToDate(longDate) {
  return longDate.split(',')[0];
}

console.log( shortenToDate('Friday May 2, 7pm') ); // 'Friday May 2'
console.log( shortenToDate('Monday January 10, 9am') ); // 'Monday January 10'