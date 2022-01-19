'use strict';

// Two to One

function longest(str1, str2) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const arr = str1.split('').concat( str2.split('') ).sort();

    return arr.filter( (el, i) => (alphabet[i] !== el) ).map( (el,i,arr) => (arr[i] !== arr[i - 1]) ? el : '').join('');
}

console.log( longest("aretheyhere", "yestheyarehere") ); // "aehrsty"
console.log( longest("loopingisfunbutdangerous", "lessdangerousthancoding") ); // "abcdefghilnoprstu"
console.log( longest("inmanylanguages", "theresapairoffunctions") ); // "acefghilmnoprstuy"