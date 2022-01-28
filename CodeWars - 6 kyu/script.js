'use strict';

// Create Phone Number

function createPhoneNumber(numbers){
    return numbers.reduce((sum, el) => sum.replace('X', el), '(XXX) XXX-XXXX');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"