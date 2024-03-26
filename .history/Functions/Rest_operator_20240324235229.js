// <-----------Rest Operator ---------->

function sum (...args) {
    // here args are the array of arguments passed to this function. 
    console.log (args);
}

sum (1, 2, 3, 4, 5, 6);     // [ 1, 2, 3, 4, 5, 6 ]



function sum2 (num, ...args) {
    console.log (args);
}

sum2 (1, 2, 3, 4, 5, 6); 



function sum3 (num, value, ...args) {
    console.log (args);
}

sum3 (1, 2, 3, 4, 5, 6); 



// Rest parameter must be last formal parameter
// function sum4 (num, ...args, value) {
//     console.log (args);
// }

// sum4 (1, 2, 3, 4, 5, 6); 
