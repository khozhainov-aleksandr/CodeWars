'use strict';

// Pillars

function pillars(num_pill, dist, width) {
  if (num_pill < 2) { return 0; }
  return (((num_pill - 1) * dist * 100) + (num_pill * width)) - (width * 2);
}

console.log(pillars(2, 20, 25)); // 2000
console.log(pillars(11, 15, 30)); // 15270