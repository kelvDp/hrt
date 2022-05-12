function ReverseWords(originalString) {
  var words = originalString.split(" ");
  var newString = "";

  for (let word of words) {
    let spChars = "";
    for (let i = word.length - 1; i >= 0; i--) {
      if (
        (word[i].charCodeAt() > 47 && word[i].charCodeAt() < 58) ||
        (word[i].charCodeAt() > 64 && word[i].charCodeAt() < 91) ||
        (word[i].charCodeAt() > 96 && word[i].charCodeAt() < 123)
      )
        newString = newString + word[i];
      else {
        spChars = spChars + word[i];
        newString = newString + spChars;
      }
    }
    newString = newString + " " ;
  }

  return newString;
}

let answer = ReverseWords("A helicopter is a type of rotorcraft.");
console.log(answer);
