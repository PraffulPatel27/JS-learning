// <--------- Object Cloning using Iteration ---------->

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
a++