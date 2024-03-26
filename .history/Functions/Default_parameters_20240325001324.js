// <-------- Default Parameters ----------- >

// Default parameters are used when the value is not passed to the function.
function interest (p, r, t) {
    return (p * r * t) / 100;
} 

console.log (interest (1000, 10, 4));   // 400



// here some parameters we not passed, so it will take the default value as undefined
function interest (p, r, t) {
    return (p * r * t) / 100;
} 

console.log (interest (1000, 10));    // Nan <- (1000 * 10 * undefined) / 100 = Nan    



// here we are passing the default value to the function that will be used if the value is not passed
function interest (p, r=8, t=3) {
    // here deafult value is passing r = 8, t = 3
    return (p * r * t) / 100;
} 

console.log (interest (1000));     // 240




function interest (p, r=10, t=3) {
    // here deafult value is passing r = 10, t = 8
    return (p * r * t) / 100;
} 
// It is bad practice to pass the value of the parameter as undefined
console.log (interest (1000, undefined, 8 ));





// GETTER AND SETTER
 
  // GETTER -> access the properties
  // SETTER -> change or mutate the properties

let person = {
    fname : 'John',
    lname : 'Doe'
};

console.log (person);      // { fname: 'John', lname: 'Doe' }


function fullName () {
    return ``
}