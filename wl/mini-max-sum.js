/*
Given five positive integers, find the minimum and maximum values that can be calculated 
by summing exactly four of the five integers.(hint: sum all integers together and subtract the 5th) 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.
*/

function miniMaxSum(arr) {
  let n = arr.length;
  let sum = 0;
  let min = arr[0]; // find min number in array - initially first element
  let max = arr[0]; // find max number in array - initially first element
  for (let i = 0; i < n; i++) {
    sum += arr[i]; // sum all elements together
    if (arr[i] > max) max = arr[i]; // find max
    if (arr[i] < min) min = arr[i]; // find min
  }

  // get output by subtracting 5th (either min or max) from the sum
  // that way it is sum of 4 elements
  console.log(sum - max + "  " + (sum - min));
}

miniMaxSum([9, 3, 5, 7, 1]);
