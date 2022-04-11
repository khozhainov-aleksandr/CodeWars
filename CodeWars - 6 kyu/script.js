'use strict';

// Modify list

const list = 'Oprah:Winfrey;Britney:Spears;Kim:Kardashian;Gigi:Hadid;Khloe:Kardashian;Bella:Hadid';

function modifyList(list) {
  return list
    .toUpperCase()
    .split(';')
    .map(el => `(${el.split(':').reverse().join(', ')})`)
    .sort((a, b) => a.localeCompare(b))
    .join('');
}

console.log( modifyList(list) ); // === '(HADID, BELLA)(HADID, GIGI)(KARDASHIAN, KHLOE)(KARDASHIAN, KIM)(SPEARS, BRITNEY)(WINFREY, OPRAH)'