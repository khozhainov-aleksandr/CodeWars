'use strict';

// Array leaders

function getLeaders(numbers) {
  const res = [];

  for (let i = 0; i < numbers.length; i++) {
    let sum = 0;

    for (let j = i+1; j < numbers.length; j++) {
      sum += numbers[j];
    }

    if (numbers[i] > sum) { 
      res.push(numbers[i]);
    }
  }

  return res;
}

console.log( getLeaders([1, 2, 3, 4, 0]) ); // === [4]

// 4 is greater than the sum all the elements to its right side
// The last element 0 is equal to right sum of its elements

console.log( getLeaders([16, 17, 4, 3, 5, 2]) ); // === [17, 5, 2]

// 17 is greater than the sum all the elements to its right side
// 5 is greater than the sum all the elements to its right side
// The last element 2 is greater than the sum of its right elements