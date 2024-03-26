// <-------- Default Parameters ----------- >

// Default parameters are used when the value is not passed to the function.
function interest (p, r, t) {
    return (p * r * t) / 100;
} 

console.log (interest (1000, 10, 4));   // 400



// here some parameters we not passed, so it will take the default value as undefined
function interest (p, r, t) {
    return (p * r * t) / 100;
} 

console.log (interest (1000, 10));    // Nan <- (1000 * 10 * undefined) / 100 = Nan    



// here we are passing the default value to the function that will be used if the value is not passed
function interest (p, r=, t) {
    return (p * r * t) / 100;
} 

console.log (interest (1000, 10));