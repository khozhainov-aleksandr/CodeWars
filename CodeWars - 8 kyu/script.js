'use strict';

// Format message

function capitalize (word) {
  return word[0].toUpperCase() + word.slice(1);
}

function formatMessage(message, callback) {
  const arr = message.split(' ');
  const res = [];

  arr.forEach(element => {
    res.push(callback(element));
  });

  return res.join(' ');
}


console.log( formatMessage('this is sparta', capitalize) ); 
// 'This Is Sparta'

const shorten = word => word.slice(0, 2);
console.log( formatMessage('this is sparta', shorten) ); 
// 'th is sp'