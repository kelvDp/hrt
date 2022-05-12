function palindromeIndex(s) {
  let lowerCaseWord = s.toLowerCase();
  let reversed = lowerCaseWord.split("").reverse().join("");
  let n = s.length;

  if (lowerCaseWord == reversed) {
    return -1;
  }

  for (let i = 0; i < n; i++) {
    let firstReversed = lowerCaseWord
      .substring(i, n - 1 - i)
      .split("")
      .reverse()
      .join("");
    let secondReversed = lowerCaseWord
      .substring(i + 1, n - i)
      .split("")
      .join("");
    if (lowerCaseWord[i] !== lowerCaseWord[n - 1 - i]) {
      if (lowerCaseWord.substring(i, n - 1 - i) === firstReversed) {
        return n - 1 - i;
      } else if (lowerCaseWord.substring(i + 1, n - i) === secondReversed) {
        return i;
      }
    }
  }

  return -1;
}

let answer = palindromeIndex("rotto");
let answer2 = palindromeIndex("Otto");
let answer3 = palindromeIndex("aaab");

console.log(answer);
console.log(answer2);
console.log(answer3);

