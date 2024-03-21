// <--------- Object Cloning using Iteration ---------->

// object - clone #1
let src = {
    a : 10,
    b : 20,
    c : 30,
};

let dest = {};

for (let key in src) {
    dest[key] = src[key];
}

console.log (dest);

// Check it is copied or not
src.a++;
console.log (src);
console.log (dest);