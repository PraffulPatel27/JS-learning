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


// <--- string endswith --->
console.log ('Ends with : ' + firstName.endsWith ('hn'));


// <---- Index of character in a string --->
console.log ('Index of h ' + firstName.indexOf ('h'));


// <--- Convert to uppercase
console.log ('Uppercase : ' + firstName.toUpperCase());


// <--- Convert to lowercase    
console.log ('Lowercase : ' + firstName.toLowerCase());



let nameF = ' Hello Ji ';

// <---- Trim the string --->
console.log ('before trim length ' + nameF.length);
console.log ('trim whitespaces : '+ nameF.trim().length);


// <---- Replace the string --->
console.log (nameF.replace ('Ji', 'World')) ;


//