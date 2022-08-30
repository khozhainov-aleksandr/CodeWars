'use strict';

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> ac8d79d (Finish task)
// Basic Training: Add item to an Array

const websites = [];

websites.push('codewars')

// eslint-disable-next-line no-console
console.log('===>', websites);
<<<<<<< HEAD
>>>>>>> 9f62671 (Finish task)
=======
=======
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
>>>>>>> 9a1fba8 (Finish task)
>>>>>>> ac8d79d (Finish task)
