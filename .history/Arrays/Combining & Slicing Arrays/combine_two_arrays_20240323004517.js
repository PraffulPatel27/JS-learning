// <----- slicing / subarray arrays ------>

let arr = [1, 5, 6, 8, 9, 10, 11];


// <--- slice method --->
let sliced = arr.slice (2, 6);
console.log (sliced); // [6, 8, 9, 10]


let ans1 = arr.slice ();     // original array
console.log (ans1);          // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let ans2 = arr.slice (1);    // after 0 indexed all elements
console.log (ans2);          // [5
