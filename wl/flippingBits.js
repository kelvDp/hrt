/*
You will be given a list of 32 bit unsigned integers. 
Flip all the bits (1 -> 0 and 0 -> 1) and return the result as an unsigned integer
*/

function flippingBits(n) {

    console.log(n.toString(2));
    let bits = n.toString(2).padStart(32, 0);
    let result = "";

    for (let x of bits) {
        result += x === "0" ? "1" : "0";
    }
    console.log(parseInt(result, 2));

    // console.log(answer);
}

flippingBits(3);
