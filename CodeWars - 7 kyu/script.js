'use strict';

// Game Hit the target

const solution = (mtrx) => {

    for (let i = 0; i < mtrx.length; i++) {
        const shot = mtrx[i].findIndex(el => el === '>');
        const target = mtrx[i].findIndex(el => el === 'x');

        if (shot >= 0 && shot < target) {
            return true;
        }
    }

    return false;
};

console.log( solution(
    [
        ['>', ' '],
        [' ', 'x']
    ]
) ); // false

console.log( solution(
    [
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', '>', ' ', 'x'],
        [' ', ' ', '', ' ', ' ']
    ]
) ); // true

console.log( solution(
    [
        [' ', ' ', ' ', ' '],
        [' ', 'x', '>', ' '],
        [' ', '', ' ', ' '],
        [' ', ' ', ' ', ' ']
    ]
) ); // false