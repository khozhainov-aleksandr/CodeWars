'use strict';

// Reverse message

function reverseMessage(message) {
  return message.split(' ').map(el => el.split('').reverse().join('')).join(' ');
}

console.log( reverseMessage('tpircsavaJ si eht egaugnal fo erutuf') ); // 'Javascript is the language of future'