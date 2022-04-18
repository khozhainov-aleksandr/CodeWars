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

// Jaden casing string

function toJadenCase(quote) {
  return quote
    .split(' ')
    .filter(el => el !== '')
    .map(el => {
      const last = el.replace(el[0], '')
      return el[0].toUpperCase() + last;
    })
    .join(' ');
}

console.log( toJadenCase('i watch twilight every night') ); // === 'I Watch Twilight Every Night'
console.log( toJadenCase('Trees are never Sad') ); // === 'Trees Are Never Sad'
console.log( toJadenCase('  no   more words') ); // === 'No More Words'