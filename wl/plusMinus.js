/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with  places after the decimal.
*/

function plusMinus(arr) {
  let n = arr.length;

  // set counters 
  let numPositive = 0;
  let numNegative = 0;
  let numZero = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) numPositive++;
    if (arr[i] < 0) numNegative++;
    if (arr[i] === 0) numZero++;
  }

  console.log((numPositive / n).toFixed(6) + "\n" + (numNegative / n).toFixed(6) + "\n" + (numZero / n).toFixed(6));
}

plusMinus([1,1,0,-1,-1]);
