'use strict';

// Sum objects

const obj = {};
const first = {a: 2, b: 4};
const second = {a: 2, b: 10};
const third = {d: -5};


function sumObjects(...value) {
  const newObj = {};

  value.forEach(element => {
    for (const key in element) {
      newObj[key] = (newObj[key] || 0) + element[key];
    }
  });

  return newObj;
}



console.log( sumObjects() ); // === {}
console.log( sumObjects(obj) ); // === {}

console.log( sumObjects(first) ); // === {a: 2, b: 4}
console.log( sumObjects(first, third) ); // === {a: 2, b: 4, d: -5}
console.log( sumObjects(first, second, third) ); // === {a: 4, b: 14, d: -5}