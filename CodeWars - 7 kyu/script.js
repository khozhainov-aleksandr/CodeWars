'use strict';

// Shortest Word

function findShort(str) {
    return str.split(' ').sort((a,b) => a.length - b.length)[0].length;
}

console.log( findShort("bitcoin take over the world maybe who knows perhaps") ); // 3
console.log( findShort("Let's travel abroad shall we") ); // 2