'use strict';

// Safen User Input Part I - htmlspecialchars

function htmlspecialchars(formData) {
  return formData
    .split('')
    .map(el => {
      switch (el) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '"': return '&quot;';
        case '&': return '&amp;';
        case el: return el;
      }
    })
    .join('');
}

console.log(htmlspecialchars("<h2>Hello World</h2>")); // "&lt;h2&gt;Hello World&lt;/h2&gt;"

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// For Twins: 1. Types

function typeValidation(variable, type) {
  return typeof variable === type;
}

// eslint-disable-next-line no-console
console.log('===>', typeValidation(42, "number")); // true

// eslint-disable-next-line no-console
console.log('===>', typeValidation("42", "number")); // false

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Grasshopper - Debug

function weatherInfo (temp) {
  const c = convertToCelsius(temp);

  if (c < 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

function convertToCelsius (temperature) {
  return (temperature - 32) * (5 / 9);
}

console.log('===>', weatherInfo(50)); // '10 is above freezing temperature'

console.log('===>', weatherInfo(23)); // '-5 is freezing temperature'

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Grasshopper - Check for factor

function checkForFactor (base, factor) {
  return base % factor === 0;
}

console.log(checkForFactor(10,2)); // true
console.log(checkForFactor(63,7)); // true
console.log(checkForFactor(2450,5)); // true
console.log(checkForFactor(24612,3)); // true

console.log(checkForFactor(9,2)); // false
console.log(checkForFactor(653,7)); // false
console.log(checkForFactor(2453,5)); // false
console.log(checkForFactor(24617,3)); // false

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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