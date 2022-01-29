'use strict';

// DNA to RNA Conversion

function DNAtoRNA(dna) {
  // return dna.replaceAll('T', 'U');
  return dna.split('').map(el => (el === 'T') ? 'U' : el).join('');
}

console.log(DNAtoRNA("TTTT")); // 'UUUU'
console.log(DNAtoRNA("GCAT")); // 'GCAU'
console.log(DNAtoRNA("GACCGCCGCC")); // 'GACCGCCGCC'