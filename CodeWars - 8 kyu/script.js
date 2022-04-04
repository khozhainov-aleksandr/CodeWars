'use strict';

// Library chaos

function sortBooks(shelves) {
  return shelves.flat().sort();
}

console.log( sortBooks([
  ['Going Over', 'Brazen'],
  ['The Enemy'],
  ['Followers', 'Belle Epoque']
]) ); // ['Belle Epoque', 'Brazen', 'Followers', 'Going Over', 'The Enemy']