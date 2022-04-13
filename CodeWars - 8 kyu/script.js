'use strict';

// Make looper

function makeLooper(str) {
  const arr = str.split('');
  let count = 0;

  return () => {
    if (count === arr.length) {
      count = 0;
    }

    return arr[count++];
  };
}

const abc = makeLooper('abc');

console.log("🔥 => abc()", abc()); // === 'a' // возвращает 'a' при первом вызове
console.log("🔥 => abc()", abc()); // === 'b' // возвращает 'b' при втором вызове
console.log("🔥 => abc()", abc()); // === 'c' // возвращает 'c' при третьем вызове
console.log("🔥 => abc()", abc()); // === 'a' // возвращает снова 'a' при четвертом вызове