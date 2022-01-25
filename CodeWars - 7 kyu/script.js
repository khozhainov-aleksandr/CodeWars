'use strict';

// Beginner Series #2 Clock

function past(h, m, s){
    return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000);
}

console.log(past(0,1,1)); // 61000
console.log(past(1,1,1)); // 3661000