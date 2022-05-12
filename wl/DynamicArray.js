function dynamicArray(n, queries) {
    let twoDarr = [];
    let lastAnswer = 0;
    let answerArr = [];

    for (let i = 0; i < n; i++) {
        twoDarr.push([]);
    }

    for (let j = 0; j < queries.length; j++) {
        let idx = ((queries[j][1] ^ lastAnswer) % n);
        if (queries[j][0] === 1) {
            twoDarr[idx].push(queries[j][2])
        } else {
            lastAnswer = twoDarr[idx][(queries[j][2]) % twoDarr[idx].length];
            answerArr.push(lastAnswer);
        }
    }


    // console.log((1^0)%2);
    console.log(twoDarr, answerArr);
    return answerArr;
}

dynamicArray(2, [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ]);