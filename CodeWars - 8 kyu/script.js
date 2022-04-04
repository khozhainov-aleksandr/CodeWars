'use strict';

// No more words

function getOrder(wish, wordsCount) {
  const res = wish.split(' ').slice(0, wordsCount).join(' ');
  return res;
}

const wish = `I want a short stylish haircut, like my brother's`;

getOrder(wish, 4); // 'I want a short'
getOrder(wish, 6); // 'I want a short stylish haircut,'