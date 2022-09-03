'use strict';

function typeValidation(variable, type) {
  return typeof variable === type;
}

// eslint-disable-next-line no-console
console.log('===>', typeValidation(42, "number")); // true

// eslint-disable-next-line no-console
console.log('===>', typeValidation("42", "number")); // false