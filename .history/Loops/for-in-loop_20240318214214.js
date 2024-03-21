// <------- for in loop ------->

let array = {
    ones : 1,
    two : 2,
    three : 3,
    four : 4,
}

// for-in-loop
for (let key in array) {
    // keys are reflected through key variable
    // values are reflected through 
    console.log (key, array[key]);
}