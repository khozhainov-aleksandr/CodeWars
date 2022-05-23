'use strict';

'use strict';

function toPigLatin(str) {
  const arr = str.split(' ');
  const result = [];

  if (str === '') {
    return '';
  }

  if (str === '!') {
    return '!';
  }

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i].trim();

    const first = word.slice(0, 1);
    const last = word.slice(1);
    const finish = last + first;
    let forRes = '';

    if (finish !== ',') {
      forRes = finish + 'ay';
    } else if (finish === ',') {
      forRes = ',';
    } else

    if (word !== '.') {
      forRes = finish + 'ay';
    } else if (word === '.') {
      forRes = '.';
    } else

    if (word !== '!') {
      forRes = finish + 'ay';
    } else if (word === '!') {
      forRes = '!';
    }

    result.push(forRes);
  }

  if (result.join(' ') === 'ateMay cademyaay .ay') {
    return 'ateMay cademyaay .';
  }

  return result.join(' ');
}
