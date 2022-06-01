function balancedSums(arr) {

    let leftSum = 0;
    let rightSum = 0;

    for (let i = 1; i < arr.length; i++) {
        rightSum += arr[i];
    }


    for (let i = 0; i < arr.length; i++) {
        if (leftSum === rightSum) {
            return "YES";
        }
        leftSum += arr[i];
        rightSum -= arr[i + 1];
    }

    return "NO";
}

let answer1 = balancedSums([1, 2, 3]);
let answer2 = balancedSums([1, 2, 3, 3]);
let answer3 = balancedSums([5, 6, 8, 11]);
let answer4 = balancedSums([1, 1, 4, 1, 1]);
let answer5 = balancedSums([2, 0, 0, 0]);

console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);
console.log(answer5);
