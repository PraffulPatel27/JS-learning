// <----------- Prpmises in JavaScript ------------>

  // A promise is an object representing the eventual completion or failure of an asynchronous operation.
  // A promise is used to run some code parallelly and once the code is executed, it will return the result.

let newPromise = new Promise (function (resolve, reject) {
    setTimeout (function () {
        console.log ('I am a setTimeout function');
    }, 5000);

    // 
    resolve (2233);
})


