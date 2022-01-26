'use strict';

// Fake Binary

function fakeBin(x) {
    return x.split('').map(el => (Number(el) < 5) ? '0' : '1').join('');
}

console.log(fakeBin('45385593107843568')); // '01011110001100111'
console.log(fakeBin('509321967506747')); // '101000111101101'