function towerBreakers(n, m) {
  // n -> number of towers
  // m -> height of towers

  if (n % 2 === 0 || m === 1) {
    return 2;
  }

  return 1;
}

let answer1 = towerBreakers(2, 6);
let answer2 = towerBreakers(1, 6);
let answer3 = towerBreakers(4, 7);

console.log(answer1);
console.log(answer2);
console.log(answer3);
