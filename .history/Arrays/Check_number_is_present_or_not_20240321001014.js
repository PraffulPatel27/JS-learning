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

  // Syntax : - array_name.indexof (searchElement, fromIndex);
console.log ('start checking from index 2 : ' + arr.indexOf (1, 2));   // -1





// <------ find element in objects ------>

let courses = [
    {no: 1, name : 'Pankaj'},
    {no: 2, name : 'Rahul'},
    {no: 3, name : 'Rohit'},
    {no: 4, name : 'Hritik'},
];

console.log (courses);

// <------ It is not right way to find element in objects ------>
console.log ( courses.indexOf( {no:1, name: 'Rahul'} ) );  
 // -1 , because it is not able to find the object in array of objects

console.log ( courses.includes( {no:1, name: 'Rahul'} ) ); 
 // false , because it is not able to find the object in array of objects  




// <------- Call back function in find method ------>

let course = course