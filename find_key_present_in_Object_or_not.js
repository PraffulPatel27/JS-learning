// Check key is present in object or not

let arr = {
    ones : 1,
    two : 2,
    three : 3,
    four : 4,
}


if ('three' in arr) {
    console.log ('it is present');
}
else {
    console.log ('it is not present');
}

if ('five' in arr) {
    console.log ('it is present');
}
else {
    console.log ('it is not present');
}
