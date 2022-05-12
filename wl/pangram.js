/*
Complete the function pangrams in the editor below. 
It should return the string pangram if the input string is a pangram. Otherwise, it should return not pangram.

pangram is a string that contains all letters of the alphabet
*/

function pangrams(s) {
  s = s.toLowerCase(); // convert to lower case first

  let alphabet = "abcdefghijklmnopqrstuvwxyz"; // create alphabet and split into an array
  let alphabetArr = alphabet.split("");

  // loop through alphabet array and check to see if the letter is in the given string.
  for (let letter of alphabetArr) {
    if (!s.includes(letter)) {
      return "not pangram";
    }
  }

  return "pangram";
}

let answer = pangrams("We promptly judged antique ivory buckles for the prize");
let answer2 = pangrams(
  "We promptly judged antique ivory buckles for the next prize"
);

console.log(answer);
console.log(answer2);
