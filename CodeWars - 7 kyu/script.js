'use strict';

// Jaden Casing Strings

String.prototype.toJadenCase = function () {
    return this.split(' ').map(el => el.replace(el[0], el[0].toUpperCase())).join(' ');
};

let str = "How can mirrors be real if our eyes aren't real";

console.log( str.toJadenCase() ); // "How Can Mirrors Be Real If Our Eyes Aren't Real"