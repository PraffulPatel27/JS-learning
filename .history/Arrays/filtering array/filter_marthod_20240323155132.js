// <-------- filter method -------->

let numbers = [1, 4, -2, 5, -1, -4 , 10];


let filtered = numbers.filter (function (value) {
    return value >= 0;
});

console.log (filtered);


// using callback function to filter
let filtered2 = numbers.filter ((value) =>  {
    return value < 0;
});
console.log (filtered2);