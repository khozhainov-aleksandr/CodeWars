'use strict';

// Regex validate PIN code

function validatePIN (pin) {
    let filterArr = pin.trim().split('').filter(el => !isNaN( Number(el) ));

    if (pin.length !== filterArr.length) { return false; }

    return !(filterArr.length !== 4 && filterArr.length !== 6);
}

console.log( validatePIN("1234") ); // true
console.log( validatePIN("090909") ); // true

console.log( validatePIN("123 ") ); // false
console.log( validatePIN("1234 ") ); // false
console.log( validatePIN("09.9") ); // false
console.log( validatePIN("-909") ); // false
console.log( validatePIN("-1234") ); // false
console.log( validatePIN("1.234") ); // false
console.log( validatePIN("-1.234") ); //false