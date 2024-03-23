// <------ Emptying array ------->

let nums = [1, 2, 3, 4, 5];
let nums2 = nums;    // Passing reference to nums2 

console.log (nums);   // [1, 2, 3, 4, 5]

console.log (nums2);   // [1, 2, 3, 4, 5]


nums = [];   
// console.log (nums);   // []
// console.log (nums2);   // [1, 2, 3, 4, 5]
  // now nnums2 was not empty because nums2 was pointing to the old array.
   // but 

// Way 1 
nums2.length = 0; 
console.log (nums);   // []

// Way 2
nums.splice (0, nums.length);
console.log (nums);   // []

