// <--------- Object Cloning using Assigning ---------->

// object - clone #2
let src = {
    a : 10,
    b : 20,
    c : 30,
};

let src2 = {value : 100};

// Multiple object are copied 
let dest = Object.assign ({}, src, src2);

console.log (dest);

// Check it is copied or not
src.a++;
console.log (src);
console.log (dest);