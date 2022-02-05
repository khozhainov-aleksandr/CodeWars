'use strict';

// Well of Ideas - Easy Version

function well(arr) {
    let res = 0;
    arr.filter(el => (el === 'good') ? res += 1 : res);
    if (res === 0) { return 'Fail!'; }
    return (res <= 2) ? 'Publish!' : 'I smell a series!';
}

console.log(well(['bad', 'bad', 'bad'])); // 'Fail!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])); // 'Publish!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])); // 'I smell a series!'