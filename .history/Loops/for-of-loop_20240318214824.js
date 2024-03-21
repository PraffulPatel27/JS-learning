// <------- for of loop ------->

let arr = {
    ones : 1,
    two : 2,
    three : 3,
    four : 4,
}

// for-of-loop

// for (let key of array) {
//     console.log (key);
// }
// Error: array is not iterable


// <--- to fix this error we need to convert the object into array
for (let array of Object.keys(array)) {
    console.log (array);
}