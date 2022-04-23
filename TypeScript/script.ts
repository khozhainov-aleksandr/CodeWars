'use strict';

// Compare sizes

function canIWear(mySize: string, itemSize: string): boolean {
  const arr: string[] = ['xs', 's', 'm', 'l', 'xl'];

  const mySizeNumber: number = arr.indexOf(mySize);
  const itemSizeNumber: number = arr.indexOf(itemSize);
  
  return (mySizeNumber <= itemSizeNumber);
}

console.log("🔥 => canIWear('l', 'l')", canIWear('l', 'l')); // === true
console.log("🔥 => canIWear('m', 'xl')", canIWear('m', 'xl')); // === true
console.log("🔥 => canIWear('s', 'xs')", canIWear('s', 'xs')); // === false