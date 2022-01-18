'use strict';

// Credit Card Mask

function maskify(cc) {
    return cc.split('').reverse().map((el, i) => (i >= 4) ? '#' : el).reverse().join('');
}

console.log( maskify('4556364607935616') ); // '############5616'
console.log( maskify('64607935616') ); // "#######5616"