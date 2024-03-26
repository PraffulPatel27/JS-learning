// <------- Multiple Argument ---------->

function sum (a, b) {
    return a + b;
}


console.log (sum (1, 2));   // 3
console.log (sum (1));      // Nan <- (a = 1, b = undefined) -> 1 + undefined = Nan 

console.log (sum (1, 2, 3, 4, 5));     // 3  (remaining )

