// <----- Scope in JS -------->

// let scope is block scope
for (var i=0; i<10; i++) {
}
console.log (i)


// var scope is global scope 
for (var j=0; i<10; i++) {
}
console.log (i)