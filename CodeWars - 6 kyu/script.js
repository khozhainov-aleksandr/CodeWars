'use strict';

// Rake garden

let garden = 'gravel rock slug ant gravel snail rock'

function rakeGarden(garden) {
  return garden.split(' ').map(el => (el !== 'gravel' && el !== 'rock') ? 'gravel' : el).join(' ');
}

console.log( rakeGarden('') ); // === 'gravel'
console.log( rakeGarden(' ') ); // === 'gravel gravel'
console.log( rakeGarden(garden) ); // === 'gravel rock gravel gravel gravel gravel rock'