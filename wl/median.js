function findMedian(arr) {
  
  let sortedArray = arr.sort();
  let middle = Math.floor(sortedArray.length / 2);

  if (sortedArray.length % 2 === 0) {
    console.log(sortedArray);
    return parseInt((sortedArray[middle - 1] + sortedArray[middle]) / 2.0)

  }

  console.log(sortedArray);

 return parseInt(sortedArray[middle]);
}

let test1 = findMedian([3, 5, 6, 1, 4, 2]);
let test2 = findMedian([5, 3, 1, 2, 4]);
let test3 = findMedian([7]);
let test4 = findMedian([0]);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);


function findMedian2(arr) {
  
    let sortedArray = arr.sort();
    let middle = Math.floor(sortedArray.length / 2);
  
    if (sortedArray.length % 2 === 0) {
      console.log(sortedArray);
      return parseInt((sortedArray[middle - 1] + sortedArray[middle]) / 2.0)
  
    }
  
    console.log(sortedArray);
  
   return parseInt(sortedArray[middle]);
  }