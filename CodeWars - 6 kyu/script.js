'use strict';

// A century

function getCenturies(years) {
  return years.map(element => {
    const middlePosition =  String(element).length / 2;
    let addDots = String(element).split('');
    addDots.splice(middlePosition, 0, '.');
    const numWidthDots = Number(addDots.join(''));

    return Math.ceil(numWidthDots);
  });
}

const years = [1900, 1899, 2001, 2000, 1455, 14];

console.log( getCenturies(years) ); // === [19, 19, 21, 20, 15, 1]