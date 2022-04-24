'use strict';

// Get binary ID

function getBinaryId(userId: number | string): string {
  const convertToString: string = userId.toString();
  const convertTo10: number = parseInt(convertToString, 16);
  const result: string = convertTo10.toString(2);

  return result;
}

console.log("🔥 => getBinaryId(7)", getBinaryId(7)); // === '111'
console.log("🔥 => getBinaryId(12)", getBinaryId(12)); // === '1100'
console.log("🔥 => getBinaryId('FE00')", getBinaryId('FE00')); // === '1111111000000000'