'use strict';

// Jewels and stones

function countJewelsInStones(jewels, stones) {
  const jewelsArr = jewels.split('');
  const stonesArr = stones.split('');
  const res = [];

  jewelsArr.forEach(element => {
    const x = stonesArr.filter(el => el === element);
    res.push(...x);
  });

  return res.length;
}

console.log( countJewelsInStones('aA', 'aAAbbbb') ); // === 3
console.log( countJewelsInStones('dDfFgG', 'dfgDFGdfg') ); // === 9
console.log( countJewelsInStones('bnm', 'BBNNmm') ); // === 2
console.log( countJewelsInStones('poiuy', 'zxcvb') ); // === 0