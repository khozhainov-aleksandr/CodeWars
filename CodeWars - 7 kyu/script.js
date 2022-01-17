'use strict';

// Descending Order

function descendingOrder(number){
    return Number( String(number).split('').sort((a,b) => (b-a)).join('') );
}

console.log( descendingOrder(145263) ); // 654321