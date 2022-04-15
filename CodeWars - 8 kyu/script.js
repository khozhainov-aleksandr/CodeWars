'use strict';

// Apply invocations

function add(a) {
  return (b) => {
    return a + b;
  };
}

function subtract(a) {
  return (b) => {
    return a - b;
  };
}

function multiply(a) {
  return (b) => {
    return a * b;
  };
}

function applyInvocations(func) {
  return (firstElement) => {
    return (secondElement) => {
      return func(firstElement)(secondElement);
    };
  };
}

// console.log( add(1)(3) ); // === 4
// console.log( subtract(10)(2) ); // === 8
// console.log( multiply(9)(20) ); // === 180

console.log( applyInvocations(add)(9)(2) ); // === 11
console.log( applyInvocations(subtract)(100)(-99) ); // === 199
console.log( applyInvocations(multiply)(7)(-8) ); // === -56