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




// Example of Primitive (Pass by value)
let s = 16;

function increase (s) {
    // while passing value in function it is primitve value
    s++;
}

increase (s);
// outside that s variable are point to the old variable
console.log ('after calling the function : ' + s);


// Example of Reference (Pass by refrecne)
let ans = {value: 10};

function increment (ans) {
  ans.value++;
}

increment (ans);