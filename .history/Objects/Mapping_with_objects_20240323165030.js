// <------ mapping with objects -------->

let nums = [1, 2, -6, -9];
let filtered = nums.filter ((value) => {
    return value >= 0;
});


let items = filtered.map (function (num) {
    return {value : num};
});

console.log (items);


// Chaining 
let ans = nums
            .filter((value) => value >= 0)
            .map (function (num) { return {value : num};
});