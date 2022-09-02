'use strict';

// Subtract the Sum

function SubtractSum(n) {
  const arr = [0, 'kiwi', 'pear', 'kiwi', 'banana', 'melon', 'banana', 'melon', 'pineapple', 'apple', 'pineapple', 'cucumber', 'pineapple', 'cucumber', 'orange', 'grape', 'orange', 'grape', 'apple', 'grape', 'cherry', 'pear', 'cherry', 'pear', 'kiwi', 'banana', 'kiwi', 'apple', 'melon', 'banana', 'melon', 'pineapple', 'melon', 'pineapple', 'cucumber', 'orange', 'apple', 'orange', 'grape', 'orange', 'grape', 'cherry', 'pear', 'cherry', 'pear', 'apple', 'pear', 'kiwi', 'banana', 'kiwi', 'banana', 'melon', 'pineapple', 'melon', 'apple', 'cucumber', 'pineapple', 'cucumber', 'orange', 'cucumber', 'orange', 'grape', 'cherry', 'apple', 'cherry', 'pear', 'cherry', 'pear', 'kiwi', 'pear', 'kiwi', 'banana', 'apple', 'banana', 'melon', 'pineapple', 'melon', 'pineapple', 'cucumber', 'pineapple', 'cucumber', 'apple', 'grape', 'orange', 'grape', 'cherry', 'grape', 'cherry', 'pear', 'cherry', 'apple', 'kiwi', 'banana', 'kiwi', 'banana', 'melon', 'banana', 'melon', 'pineapple', 'apple', 'pineapple'];
  let counter = n;
  
  do {
    const sum = counter
    .toString()
    .split('')
    .map(el => Number(el))
    .reduce((acc, el) => acc + el);
    
    counter = counter - sum;
  } while (arr.length <= counter);

  return arr[counter];
}

// eslint-disable-next-line no-console
console.log('===>', SubtractSum(325)); // "apple"