// <-------- Check number is present or not -------->

let arr = [1, 2, 3, 4, 5];

console.log (arr);

console.log (arr.indexOf (4));  // 3

// we want to check if a number exist in an array or not
if (arr.indexOf (5) != -1) {
    console.log ('Number is present');
}
// It is a Bad practice 



// <-------- Check number is present or not -------->
console.log (arr.includes (6));    // false
console.log (arr.includes (2));    // true



// <---- start checking at particular index ---->

  // Syntax : - array_name.indexof (t)
console.log ('start checking from index 2 : ' + arr.indexOf (1, 2));   // -1




