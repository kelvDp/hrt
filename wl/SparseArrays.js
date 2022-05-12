/*
There is a collection of input strings and a collection of query strings. 
For each query string, determine how many times it occurs in the list of input strings. 
Return an array of the results.
*/

function matchingStrings(strings, queries) {
  // initialize empty array for counts
  let counts = [];

  for (let i = 0; i < queries.length; i++) {
    // loop through query array
    let count = 0;
    for (let j = 0; j < strings.length; j++) {
      // loop through string array and compare
      if (queries[i] === strings[j]) count++;
    }
    counts.push(count); // populate counts array
  }

  return counts;
}

let answer = matchingStrings(["def", "de", "fgh"], ["de", "lmn", "fgh"]);

console.log(answer);
