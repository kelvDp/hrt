function superDigit(n, k) {

    let reducedValue;
    let x = "";

    // base case 
    if (parseInt(n) < 10) {
        return parseInt(n);
    }

    
    if (k === 0) {
        reducedValue = n.split("").reduce((a, v) => a + parseInt(v), 0);
    } else {
        // for (let i = 0; i < k; i++) {
        //     x += n;
        // }
        
        reducedValue = n.split("").reduce((a, v) => a + parseInt(v), 0) * k;
        
    }

    return superDigit(reducedValue.toString(), 0);

}

let answer = superDigit('148', 3);

console.log(answer);