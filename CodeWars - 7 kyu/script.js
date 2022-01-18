'use strict';

// Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {  
    const [firstNumber, secondNumber] = numbers.sort((a,b) => (a-b));
    return firstNumber + secondNumber;
}

console.log( sumTwoSmallestNumbers([5, 8, 12, 19, 22]) ); // 13
console.log( sumTwoSmallestNumbers([23, 71, 33, 82, 1]) ); // 24