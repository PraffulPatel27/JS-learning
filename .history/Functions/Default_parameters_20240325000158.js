// <-------- Default Parameters ----------- >

// Default parameters are used when the value is not passed to the function.
function interest (p, r, t) {
    return (p * r * t) / 100;
} 

console.log (interest (1000, 10, 4));   // 400



// here some parameters we not pass
function interest (p, r, t) {
    return (p * r * t) / 100;
} 

console.log (interest (1000, 10));    // Nan <- (1000 * 10 * undefined) / 100 = Nan    
