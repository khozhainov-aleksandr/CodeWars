'use strict';

// Row weights

function getRowWeights(array) {
  let one = 0;
  let two = 0;

  array.forEach((element, index) => {
    if (index % 2 === 0) {
      one += element;
    } else {
      two += element;
    }
  });

  return [one, two];
}

console.log( getRowWeights([10]) ); // [10, 0]
console.log( getRowWeights([10, 85, 90]) ); // [100, 85]
console.log( getRowWeights([8, 5, 9, 3]) ); // [17, 8]