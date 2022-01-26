'use strict';

// Reversed sequence

const reverseSeq = (n) => {
    let res = [];

    for (let i = n; i >= 1; i--) {
        res.push(i);
    }

    return res;
};

console.log(reverseSeq(5));  // [5, 4, 3, 2, 1]