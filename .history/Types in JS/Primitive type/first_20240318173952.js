// <---------- Primitive type ---------->

  // <--- Number , string, Null , undefined , boolean ...
  // Primitive are copied by their values 
  
// Example
let a = 10;
let b = a;

a++;
console.log (a);
console.log (b);



// <---------- Reference type ---------->
   // Reference are copied by their address / references
  
// Example
let c = { value: 14};
let d = c;

c.value++;
console.log (c.value);
console.log (d.value);




// Example
let s = 16;

function increase (s) {
    s++;
}

increase (s);
console.log ('after calling the function : ' + s);
