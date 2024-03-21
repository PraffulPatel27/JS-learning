// <------- for of loop ------->

let arr = {
    ones : 1,
    two : 2,
    three : 3,
    four : 4,
}

// for-of-loop

// for (let key of arr) {
//     console.log (key);
// }
// Error: array is not iterable


// <--- to fix this error we need to convert the object into array
for (let key of Object.keys(arr)) {
    console.log (key);
}

// to acces keys with values 
for (let key of Object.keys(arr)) {
    console.log (key);
}