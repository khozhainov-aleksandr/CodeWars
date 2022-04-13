'use strict';

// Top Secret

// function makeSecret(secret, password) {
//   let currentSecret = secret;
//   let currentPassword = password;
//   let numberOfMistakes = 0;

//   const storage = () => 'Absolutely not a secret thing';

//   storage.getSecret = (initialPassword) => {
//     if (numberOfMistakes === 3) {
//       return null;
//     }

//     if (initialPassword === currentPassword) {
//       numberOfMistakes = 0;

//       return currentSecret;
//     }

//     numberOfMistakes++;

//     return 'Wrong password!';
//   };

//   storage.setSecret = (newSecret, newPassword) => {
//     currentSecret = newSecret;
//     currentPassword = newPassword;
//     numberOfMistakes = 0;
//   };

//   return storage;
// }

// ------------------------------------------------------------------------------------------ //

// Randomizer

// function makeRandomizer(numbers) {
//   const minValue = numbers[0];
//   const maxValue = numbers[1] - minValue + 1;
//   const arr = [];

//   while (arr.length < maxValue) {
//     const randomNumber = Math.floor(minValue + Math.random() * maxValue);

//     if (arr.indexOf(randomNumber) > -1) {
//       continue;
//     }

//     arr[arr.length] = randomNumber;
//   }

//   return () => {
//     const result = arr.pop();

//     return (result !== undefined) ? result : null;
//   };
// }

function makeRandomizer([start, end]) {
  const numbers = [];

  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }

  const randomizer = () => {
    if (numbers.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * numbers.length);
    const result = numbers[randomIndex];

    numbers.splice(randomIndex, 1);

    return result;
  };

  return randomizer;
}

const getRandom = makeRandomizer([-2, 2]);

console.log("🔥 => getRandom()", getRandom()); // === 3
console.log("🔥 => getRandom()", getRandom()); // === 4
console.log("🔥 => getRandom()", getRandom()); // === 2
console.log("🔥 => getRandom()", getRandom()); // === 1
console.log("🔥 => getRandom()", getRandom()); // === null
console.log("🔥 => getRandom()", getRandom()); // === null

