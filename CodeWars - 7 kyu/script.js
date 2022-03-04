'use strict';

// Product array

function getArrayProduct(numbers) {
  const res = [];

  for (let i = 0; i < numbers.length; i++) {
    const sumAll = numbers
      .filter(el => (numbers[i] !== el))
      .reduce((sum, el) => (sum * el));

    res.push(sumAll);
  }

  return res;
}

console.log( getArrayProduct([1, 5, 2]) ); // === [10,2,5]
// The first element 10 is the product of all array's elements except the first element 1
// The second element 2 is the product of all array's elements except the second element 5
// The third element 5 is the product of all array's elements except the third element 2

console.log( getArrayProduct([12, 20]) ); // === [20,12]
// The first element in array 20 is the product of all array's elements except the first element
// The second element 12 is the product of all array's elements except the second element

// console.log( getArrayProduct([9, 9, 9, 9, 9]) ); // [6561, 6561, 6561, 6561, 6561]