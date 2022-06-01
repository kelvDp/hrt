function gridChallenge(grid) {
  let sortedGrid = grid.reduce((acc, str) => {
    acc.push(str.split("").sort());
    return acc;
  }, []);

  console.log(sortedGrid);

  let ssG = sortedGrid.reduce((acc, arrOfStrings) => {
    arrOfStrings.map((char, i) => {
      return !acc[i] ? (acc[i] = char) : (acc[i] += char);
    });
    return acc;
  }, {});

  console.log(ssG);

  // let answer = Object.values(ssG).reduce((acc, arrOfStrings) => {
  //   arrOfStrings === arrOfStrings.split("").sort().join("")
  //     ? acc.push("YES")
  //     : acc.push("NO");
  //   return acc;
  // }, []);

  // console.log(answer);

  let values = Object.values(ssG);

  for (let i of values) {
    if (i === i.split("").sort().join("")) {
      return "YES";
    }
  }

  return "NO";
}

let a = gridChallenge(["ebacd", "fghij", "olmkn", "trpqs", "xywuv"]);
console.log(a);