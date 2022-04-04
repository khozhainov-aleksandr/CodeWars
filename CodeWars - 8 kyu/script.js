'use strict';

// Format data

function formatDate(date) {
  return date.split('-').reverse().join('.');
}

console.log( formatDate('2020-02-18') ); // '18.02.2020'