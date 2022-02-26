'use strict';

// Color stones

function colorStones(stones) {
  return stones.split('').filter((element, index, arr) => element === arr[index + 1]).length;
}

console.log( colorStones('RRGB') ); //  === 1 // 'R' нужно убрать; в результате останется 'RGB'
console.log( colorStones('RRGGB') ); //  === 2 // 'R' и 'G' нужно убрать; в результате останется 'RGB'
console.log( colorStones('RRRRGB') ); //  === 3 // 'RRR' нужно убрать; в результате останется 'RGB'
console.log( colorStones('RGBRGBRGGB') ); //  === 1 // 'G' нужно убрать в результате останется 'RGBRGBRGB'
console.log( colorStones('RGGRGBBRGRR') ); //  === 3 // 'G', 'B' и 'R' нужно убрать; в результате останется 'RGRGBRGR'
console.log( colorStones('RRRRGGGGBBBB') ); //  === 9 // 'RRR', 'GGG' и 'BBB' нужно убрать; в результате останется 'RGB'