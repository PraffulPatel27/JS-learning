// <--------- Object Cloning using Spread ---------->

// object - clone #3
let src = {
    a : 10,
    b : 20,
    c : 30,
};

let dest = {...}

console.log (dest);

// Check it is copied or not
src.a++;
console.log (src);
console.log (dest);