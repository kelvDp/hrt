function caesarCipher(s, k) {
  // Write your code here
  // s -> string
  // k -> num of letter shifts

  let output = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i].charCodeAt();
    let shiftedChar = 0;
    if (char >= 65 && char <= 90) {
      shiftedChar = (char + k - 65) % 26;
      output += String.fromCharCode(shiftedChar + 65);
    } else if (char >= 97 && char <= 122) {
      shiftedChar = (char + k - 97) % 26;
      output += String.fromCharCode(shiftedChar + 97);
    } else {
      output += s[i];
    }
  }

  console.log(output);
}

caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5);
