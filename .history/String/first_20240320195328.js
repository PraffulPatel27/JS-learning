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




// <---- trim the string | trimLeft | trimRight --->
let nameF = ' Hello Ji ';

    // <---- Trim the string --->
console.log ('before trim length ' + nameF.length);
console.log ('normal trim function : '+ nameF.trim().length);

    // <---- Trim left --->
nameF = ' Hello Ji Saree ';
console.log ('before trim length ' + nameF.length);
console.log ('trim from Left/starting : '+ nameF.trimLeft().length);

    // <---- Trim right --->
    nameF = ' Hello Ji Saree A ';
    console.log ('before trim length ' + nameF.length);
    console.log ('trim from Right/ending : '+ nameF.trimLeft().length);



// <---- Replace the string --->
console.log (nameF.replace ('Ji', 'World')) ;




// <---- Split the string on any basis --->

let str = 'This is my first Message for Javascript';

 // split above string on the basis of space
let words = str.split (' ');
console.log ('splitted string : ' + words);


