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

// Sum and range

numbers.range = function(start, count) {
  const result = [];
  let acc = start - 1;

  for (let i = 0; i < count; i++) {
    result.push(acc += 1);
  }

  return result;
};

Array.prototype.sum = function() {
  return this.reduce((acc, el) => acc + el, 0);
};

console.log( Array.range(0, 3) ); // === [0, 1, 2]

console.log( [0, 1, 2].sum() ); // === 3
console.log( Array.range(-1, 4).sum() ); // === 2