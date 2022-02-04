'use strict';

// Sentence Smash

function smash(words) {
    return words.join(' ').trim();
}

console.log(smash(["hello", "world"])); // "hello world"
console.log(smash(["hello", "amazing", "world"])); // "hello amazing world"