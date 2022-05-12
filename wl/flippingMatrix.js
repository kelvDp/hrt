function flipMatrix(matrix) {
    let n = matrix.length;
    let max = 0;
    // console.log(matrix);
    for (let i = 0; i < (n/2); i++) {
        for (let j = 0; j < (n/2); j++) {
            // console.log(matrix[i][j]);
            // console.log(matrix[i][n - j - 1]);
            // console.log(matrix[n - i - 1][j]);
            // console.log(matrix[n - i - 1][n - j - 1]);
            max = max + Math.max(matrix[i][j], matrix[i][n - j - 1], matrix[n - i - 1][j], matrix[n - i - 1][n - j - 1] )
        }
    }

    console.log(max);
}

flipMatrix([
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101,43],
  [62, 98, 114, 108],
]);

// flipMatrix([[1, 2], [3, 4]]);
