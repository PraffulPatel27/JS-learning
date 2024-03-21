// <--------- Object Cloning using Assigning ---------->

// object - clone #2
let src = {
    a : 10,
    b : 20,
    c : 30,
};

let dest = Object.assign ({}, src);

console.log (dest);

// Check it is copied or not
src.a++;
console.log (src);
console.log (dest);