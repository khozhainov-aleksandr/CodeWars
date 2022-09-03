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