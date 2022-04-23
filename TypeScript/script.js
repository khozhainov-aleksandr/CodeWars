'use strict';
// Compare sizes
function canIWear(mySize, itemSize) {
    const arr = ['xs', 's', 'm', 'l', 'xl'];
    const mySizeNumber = arr.indexOf(mySize);
    const itemSizeNumber = arr.indexOf(itemSize);
    return (mySizeNumber <= itemSizeNumber);
}
console.log("🔥 => canIWear('l', 'l')", canIWear('l', 'l')); // === true
console.log("🔥 => canIWear('m', 'xl')", canIWear('m', 'xl')); // === true
console.log("🔥 => canIWear('s', 'xs')", canIWear('s', 'xs')); // === false
