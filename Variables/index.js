console.log ("I am for separate JS file");

// Integer variable
let a = 10;
console.log (a);

// String variable
let name = "Gajodhar";
console.log (name);

name = 'Ram'
console.log (name);

// <-------------- Let variable ---------------->

if (true) {
    let n = 5;
    console.log ('Inside if let : ' + n);
}
// console.log ('access variable of inside if : ' + n);
// cannot access variable of let those variables which scope is previously ended 

// <----------Check Redeclaration for let -------->
// let name = 'nisha';
// console.log ('Again declare : ' + name);
   // We cannot <- Redeclare let variable ->



// <-------------- Var variable ---------------->
if (true) {
    var k = 100;
    console.log ('Inside if var : ' + k);
}
console.log ('access variable outside the scope of var : ' + k);
// We can access var variable outside the scope of end


// <----------Check Redeclaration for var -------->
var first_name = 'first';
console.log ('var Redeclare 1 : ' + first_name);

var first_name ='second';
console.log ('var Redeclare 2 :'+ first_name);
// We can <- Redeclare var variable ->



// <-------------- Const variable ---------------->
// const j = 16;
// j = 20;
  // Once value is defined then we cannot change it 

