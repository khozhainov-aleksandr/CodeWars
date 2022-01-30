'use strict';

// Will you make it?

function zeroFuel(distanceToPump, mpg, fuelLeft) {
  return (fuelLeft * mpg) >= distanceToPump;
}

console.log(zeroFuel(50, 25, 2)); // true
console.log(zeroFuel(100, 50, 1)); // false