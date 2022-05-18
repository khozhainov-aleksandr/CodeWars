'use strict';

// Swap array elements

// const array = [1, 2, 3, 4, 5];

// function swapArray(array, i, j) {
//   const oldNum = array[j];

//   array[i] = oldNum;
//   array[j] = 5;

//   return array;
// }

// console.log( swapArray(array, 4, 2) ); // [1, 2, 5, 4, 3]
// console.log( swapArray(array, 1, 2) ); // [1, 5, 2, 4, 3]
// console.log( swapArray(array, 0, 1) ); // [5, 1, 2, 4, 3]

// --------------------------------------------------------------------------------------------------------------------------- //

class Calendar {
  constructor() {
    this.calendar = [];
  }

  book(start, end) {
    const event = [start, end];

    let min = 0;
    let max = this.calendar.length - 1;

    while (min <= max) {
      const midEventIndex = Math.floor((min + max) / 2);
      const [midStart, midEnd] = this.calendar[midEventIndex];

      if (start < midEnd && end > midStart) {
        return false;
      }

      if (start < midEnd) {
        max = midEventIndex - 1;
      } else {
        min = midEventIndex + 1;
      }
    }

    this.calendar.splice(min, 0, event);

    return true;
  }
}

const calendar = new Calendar();
console.log( calendar.book(5, 10) ); // true
console.log( calendar.book(7, 25) ); // false
console.log( calendar.book(1, 30) ); // false
console.log( calendar.book(10, 25) ); // true

// --------------------------------------------------------------------------------------------------------------------------- //