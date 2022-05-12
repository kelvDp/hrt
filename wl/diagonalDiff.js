/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
*/

function diagonalDifference(arr) {
  // TIP: it's only one array - that contains arrays inside of it
  // so as index increases/decreases the array you're inside of changes
  // look at it in one line 
    
  // first find the values from left to right
  let ltr = arr.reduce((total, curArr, curIndex) => total + curArr[curIndex], 0);
  
  // find values from right to left
  let rtl = arr.reduce((total, curArr, curIndex) => total + curArr[curArr.length - 1 - curIndex], 0);

  return Math.abs(ltr - rtl);
}

let answer = diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
console.log(answer);
