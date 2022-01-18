'use strict';

// Complementary DNA

function DNAStrand(dna) {
    return dna.split('').map(element => {
        switch(element) {
            case 'A': return 'T';
            case 'T': return 'A'; 
            case 'G': return 'C';
            case 'C': return 'G';
        }
    }).join('');
}

console.log( DNAStrand("AAAA") ); // "TTTT"
console.log( DNAStrand("ATTGC") ); // "TAACG"
console.log( DNAStrand("GTAT") ); // "CATA"