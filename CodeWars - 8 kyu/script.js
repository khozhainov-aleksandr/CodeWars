'use strict';

function createDicto(name) {
  let text = '';

  return (...arrText) => {
    if (arrText.length > 0) {
      text += arrText[0];
    }

    return `${name} saved: ${text}`;
  }
}

const myDicto = createDicto('Aleksandr');

myDicto('It ');
myDicto('should ');
myDicto('work!');

const result = myDicto();

console.log("🔥", result); // Aleksandr saved: It should work!