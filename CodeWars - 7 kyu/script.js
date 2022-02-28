'use strict';

// Mumbling

function mumble(letters) {
    return letters
    .toLowerCase()
    .split('')
    .map((element, index, arr) => {
      return `${arr[index].toUpperCase()}${element.repeat(index)}`;
    })
    .join('-');
}

console.log( mumble('abcd') ); // 'A-Bb-Ccc-Dddd'
console.log( mumble('RqaEzty') ); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'