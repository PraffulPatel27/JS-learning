// <---------- setTimeout() function ---------->

// Whenever you trying to defer something until the stack is clear
// setTimeout() function is used to execute a function after a specified amount of time.


console.log ("I am from console.log");
setTimeout (function () {
    console.log ("I am from setTimeout");
}, 5000);

