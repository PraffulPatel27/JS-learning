// <----------- Prpmises in JavaScript ------------>

  // A promise is an object representing the eventual completion or failure of an asynchronous operation.
  // A promise is used to run some code parallelly and once the code is executed, it will return the result.

let newPromise1 = new Promise (function (resolve, reject) {
    setTimeout (function () {
        console.log ('I am a setTimeout function1');
    }, 5000);

    // code to be executed, without any error
    resolve (2233);
      // for successfully executing the code result will be fulfilled.

    // code to be executed, if there is any error
    // reject (new Error ('Error aaya hai bhai'));
      // To resolve error, best preactice is to use catch method.
});



let newPromise2 = new Promise (function (resolve, reject) {
    setTimeout (function () {
        console.log ('I am a setTimeout function2');
    }, 3000);

    // code to be executed, without any error
    resolve (2233);
      // for successfully executing the code result will be fulfilled.

    // code to be executed, if there is any error
    // reject (new Error ('Error aaya hai bhai'));
      // To resolve error, best preactice is to use catch method.
});
console.log ('first promise');




// Fullfilled -< then () -----> value
// Rejected   -< catch () -----> error

let meraPromise = new Promise (function (resolve, reject) {
    setTimeout (function () {
        console.log ('I am a mera wala promise');
    }, 8000);

    // code to be executed, without any error
    resolve (12345);

    // code to be executed, if there is any error
    // reject (new Error ('Error aaya hai bhai'));
});

  // handleing the promise using then and catch method. 
meraPromise.then ((value) => {
    console.log (value)
});

meraPromise.catch ((error) => {
    console.log ('Recieved an Error');
});

  // or we can use the then method to handle the error as well.
meraPromise.then ((value) => {console.log (value), });






// Example :- Simultaneously running the multiple promises.

let wada1 = new Promise (function (resolve, reject) {
    setTimeout (() => {
        console.log ('setTimeout 1 started');
    }, 2000);
    resolve (true);
});

let output = wada1.then(() => {
    let wada2 = new Promise (function (resolve, reject) {
        setTimeout (() => {
            console.log ('setTimeout 2 started');
        }, 3000);
        resolve ('waada 2 resolved');
    })
})


