// <------- Multiple Argument ---------->

function sum (a, b) {
    console.log (arguments);     // [Arguments] { '0': 1, '1': 2 } 
    // Prototype of argument is Object  <- (we can see in the inspect)

    return a + b;
}


console.log (sum (1, 2));   // 3
console.log (sum (1));      // Nan <- (a = 1, b = undefined) -> 1 + undefined = Nan 
console.log (sum ());       // Nan <- (a = undefined, b = undefined) -> undefined + undefined = Nan
console.log (sum (1, 2, 3, 4, 5));     // 3  (remaining arguments are not considered)


let ans = sum (1, 2, 3, 4, 5, 6, 7, 8);




// <----- Dynamic number of Parameters -------->

function sum2 (a, b) {
    let total = 0;
    for (let value of arguments) {
        total = total + value;
    }

    return total;
}

let answer = sum2 (1, 2, 3, 4, 5, 6, 7, 8);
console.log (answer);    //
