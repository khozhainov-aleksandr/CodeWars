'use strict';

function generateRows(num) {
  const result = [];

  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push([1]);
    } else if (i === 2) {
      result.push([1, 1]);
    } else {
      const preArr = result[result.length - 1];
      const arr = new Array(i);

      arr[0] = 1;

      for (let j = 0; j < i - 2; j++) {
        arr[j + 1] = preArr[j] + preArr[j + 1];
      }
      arr[i - 1] = 1;
      result.push(arr);
    }
  }

  return result;
}

console.log(generateRows(1)); // === [[1]]
console.log(generateRows(3)); // === [[1], [1, 1], [1, 2, 1]]
console.log(generateRows(6)); // === [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]]