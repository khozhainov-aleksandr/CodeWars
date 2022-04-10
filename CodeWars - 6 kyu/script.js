'use strict';

// Find index

// const people = [
//   { id: 118, firstName: 'Jan', lastName: 'Rycke' },
//   { id: 101, firstName: 'Lee', lastName: 'Haverbeke' },
//   { id: 114, firstName: 'Clara', lastName: 'Aernoudts' },
//   { id: 201, firstName: 'Anna', lastName: 'Bernardus' },
// ];

// const getPersonIndex = (people, nameEndsWith) => {
  // const res = [];

  // people.forEach(el => {
  //   const enterIndex = el.firstName.split('').reverse().findIndex(indexElement => indexElement === nameEndsWith);
  //   res.push(enterIndex);
  // });
  // console.log( res );

  // for (let i = 0; i < res.length; i++) {    
  //   if (res.some(el => el === i)) {
  //     console.log( i );
  //   }
  // }
// };

// console.log( getPersonIndex(people, 'a') ); // === 2
// console.log( getPersonIndex(people, 'k') ); // === null

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// Some method

const numbers = [1, 2, 3, 4, 10, 8];

numbers.some = function(callBack) {
  for (let i = 0; i < this.length; i++) {
    const element = callBack(this[i], i, this);

    if (element) {
      return true;
    }
  }

  return false;
};

const hasNegativeNumbers = numbers.some(el => el < 0);

console.log( hasNegativeNumbers ); // === false;
console.log( numbers ); // === [1, 2, 3, 4, 10, 8]