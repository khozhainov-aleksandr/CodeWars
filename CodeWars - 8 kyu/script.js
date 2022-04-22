'use strict';

/*
User.prototype = {
  seyHi() {
    return `Hello! I am ${this.name}`;
  },
  sayBye() {
    return `Bye! I am ${this.name}`;
  }
}

function User(name) {
  this.name = name;
  this.role = 'user';
  this.rating = 0;
}

const user1 = new User('Misha');
const user2 = new User('Aleksandr');

console.log( user1.seyHi() );
console.log( user2.sayBye() );
*/

// Работает так же как и выше

/*
User.prototype.seyHi = function() {
  return `Hello! I am ${this.name}`;
}

User.prototype.sayBye = function() {
  return `Bye! I am ${this.name}`;
}

function User(name) {
  this.name = name;
  this.role = 'user';
  this.rating = 0;
}

const user1 = new User('Misha');
const user2 = new User('Aleksandr');

console.log( user1.seyHi() );
console.log( user2.sayBye() );
*/

// ------------- //

// const father = {
//   name: 'Mykola',
//   lastName: 'Hrynko'
// };

// const misha = {
//   name: 'Misha'
// };

// Object.setPrototypeOf(misha, father); 

// console.log(misha.lastName); // 'Hrynko'

// father.lastName = 'New last name';

// console.log(misha.lastName); // 'New last name'

// ------------------------------------------------------------------------------------------------------- //

// Fix string

function fixString(str) {
  let small = 0;
  let big = 0;

  str.split('').filter(el => el !== ' ').forEach(element => {
    (element === element.toUpperCase()) ? big++ : small++;
  });

  return (big > small) ? str.toUpperCase() : str.toLowerCase();
}

console.log("🔥 => fixString('Mate Academy')", fixString('Mate Academy')); // === 'mate academy'
console.log("🔥 => fixString('Mate ACADEmy')", fixString('Mate ACADEmy')); // === 'MATE ACADEMY'
console.log("🔥 => fixString('maTE')", fixString('maTE')); // === 'mate'