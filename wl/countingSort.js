/*
Given a list of integers, count and return the number of times each value appears as an array of integers.
Example:
arr = [1,1,3,2,1]
All of the values are in the range [0...3] , so create an array of zeros ([0, 0, 0, 0]). The result would be
result = [0, 3, 1, 1]
*/

function countingSort(arr) {
  // First create a new array filled with 0's (check challenge for length)
  let frequencyArr = new Array(100).fill(0);

  // itterate through both arrays - increment the count at the index of the value of main array
  // i.e: arr[i] = 1 (this is now index for new arr) - so freqArr[1] ++
  for (let i = 0; i < arr.length; i++) {
    frequencyArr[arr[i]]++;
  }

  console.log(frequencyArr);
}

countingSort([1, 1, 3, 2, 1]);
