'use strict';

function createDictaphone(name) {
  let accumulativeText = '';

  const dictaphone = (phrase = '') => {
    accumulativeText += phrase;

    return `${name} saved: ${accumulativeText}`;
  }

  dictaphone.reset = () => {
    accumulativeText = '';
  }

  return dictaphone;
}

const myDictaphone = createDictaphone('Aleksandr');

myDictaphone('It ');
myDictaphone('should ');
myDictaphone('work!');

myDictaphone.reset();
myDictaphone('Hello ');
myDictaphone('my ');
myDictaphone('world!');

const result = myDictaphone();
console.log("🔥", result); // Aleksandr saved: Hello my world!