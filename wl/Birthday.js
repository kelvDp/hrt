function Birthday(arr, day, month) {
    let answer = 0;

    
    for (let i = 0; i < arr.length; i++) {
        let sub = arr.slice(i, (i + month));
        // console.log(sub.reduce((base, value) => base + value));
        let reducedVal = sub.reduce((base, value) => base + value);
        if (reducedVal === day) answer++;
    }
    
    return answer;
}

let answer = Birthday([2,2,1,3,2], 4, 2);

console.log(answer);