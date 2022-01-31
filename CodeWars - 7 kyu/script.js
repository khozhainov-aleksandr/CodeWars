'use strict';

// Password validation

function validatePassword(password) {
    return !!password.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g);
}

console.log(validatePassword('password')); //  === false
console.log(validatePassword('Admin12')); //  === false
console.log(validatePassword('Admin123')); //  === true
console.log(validatePassword('@dmiN122')); //  === false