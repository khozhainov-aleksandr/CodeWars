'use strict';

// Add numbers from object

const object = {
  foo: 'js',
  bar: 'fe',
  boo: 3,
  spam: 10,
  egg: 11,
};

function addNumbers(object) {
  return Object
    .values(object)
    .filter(el => typeof(el) === 'number')
    .reduce((sum, el) => sum + el);
}

console.log( addNumbers(object) ); // return 24