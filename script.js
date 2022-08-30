'use strict';

// Remove All The Marked Elements of a List
// https://www.codewars.com/kata/563089b9b7be03472d00002b/train/javascript

const arr = new Array();

Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter(el => !values_list.includes(el));
}

// eslint-disable-next-line no-console
console.log('===>', arr.remove_([1, 1, 2, 3, 1, 2, 3, 4], [1, 3])); // [2, 2, 4]
// eslint-disable-next-line no-console
console.log('===>', arr.remove_([1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2])); // [5, 6, 7, 8]
// eslint-disable-next-line no-console
console.log('===>', arr.remove_([8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3])); // [8, 7, 6, 5, 1]