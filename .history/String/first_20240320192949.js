// <------- String -------- >


// <--- normal string --->
let firstName = 'John';
  // typeof firstName = string
console.log(typeof firstName);


// <--- Object string --->
let lastName = new String ('Doe');
  // typeof lastName = object
console.log(typeof lastName);


// <--- String length --->
console.log ('length of string : ' + firstName.length);


console.log (firstName[0]);   // output: J
console.log (firstName[1]);   // output: o


// <--- Check substring in string --->
console.log ('Check substring : ' + firstName.includes ('oh'));


// <--- Check substring in string --->
console.log ('check substring 2 : ' + firstName.includes ('Doe'));


// <--- Convert to uppercase
console.log ('Uppercase : ' + firstName.toUpperCase());
