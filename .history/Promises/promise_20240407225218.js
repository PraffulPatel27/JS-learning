// <----------- Prpmises in JavaScript ------------>

  // A promise is an object representing the eventual completion or failure of an asynchronous operation.
  // A promise is used to run some code parallelly and once the code is executed, it will return the result.

let newPromise = new Promise (function (resolve, reject) {
    setTimeout (function () {
        console.log ('I am a setTimeout function');
    }, 5000);

    // code to be executed, without any error
    resolve (2233);
      // for successfully executing the code result will be fulfilled.

    // code to be executed, if there is any error
    // reject (new Error ('Error aaya hai bhai'));
      // To resolve error, best preactice is to use catch method.
});

console.log ('first promise');


