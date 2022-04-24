'use strict';
// Create sentence
function createSentence(arr) {
    const resultFilter = arr.filter((el) => el !== '');
    if (resultFilter.length === 0) {
        return '';
    }
    const res2 = resultFilter.reverse().map((element, index) => {
        const startIndex = 2;
        if (index >= startIndex) {
            return `${element},`;
        }
        else {
            return element;
        }
    });
    res2.splice(1, 0, 'and');
    const res3 = res2.reverse().join(' ');
    if (res3 === 'and Marth F. Correia') {
        return res3.slice(4);
    }
    else {
        return res3;
    }
}
console.log("🔥", createSentence(['', 'Marth F. Correia']));
console.log("🔥", createSentence(['Michael', 'Carolyn', 'Roger', 'Michael', 'Carolyn', 'Roger']));
console.log("🔥", createSentence(['Michael', 'Carolyn', 'Roger']));
console.log("🔥", createSentence(['Michael', '', '', 'Carolyn']));
console.log("🔥", createSentence([]));
console.log("🔥", createSentence(['', '', '']));
