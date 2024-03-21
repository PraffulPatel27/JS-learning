// <------- for of loop ------->

let array = {
    ones : 1,
    two : 2,
    three : 3,
    four : 4,
}

// for-of-loop
for (let key in array) {
    // keys are reflected through key variable
    // values are reflected through array[key]
    console.log (key, array[key]);
}