function isFibo(valueToCheck, previousValue, currentValue) {
  console.log("Currvalue", currentValue);
  console.log("prevValue", previousValue);
  console.log("valueToCheck", valueToCheck);
  return currentValue > valueToCheck
    ? false
    : valueToCheck == currentValue
    ? true
    : isFibo(valueToCheck, previousValue + currentValue, currentValue);
}

// let answer = isFibo(2, 0, 1);
// console.log(answer);

function fibonacci(n) {
    if (n < 2){
        return 1;
    }else{
        return fibonacci(n-2) + fibonacci(n-1);
    }
}

let test = fibonacci(4);
console.log(test);
