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



// Rest parameter must be last formal parameter
function sum3 (num, ...args, value) {
    // here args are the array of arguments passed to this function. 
    console.log (args);
    // here num = 1, and remaining are the arguments
}

sum3 (1, 2, 3, 4, 5, 6); 
