/*
Given an array of integers, where all elements but one occur twice, find the unique element.
*/

function findDistinct(arr) {
   let item = arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n))
   console.log(item);
}

findDistinct([1, 1, 2, 4, 2, 2, 1, 3, 3]);
// console.log(test);
