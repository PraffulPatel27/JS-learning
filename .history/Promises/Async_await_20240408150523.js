// <------------ Async/Await ------------>

  // Async function always returns a promise.
  // Async await - while the promise is executing, until its not end, 
    // it will not go to the next line of code.

  // Example of async await: 


  async function details () {
    return 'I am a async function';
  };

  console.log (details ()); 



async function utility () {
    
    let delhiWeather = new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve ('Delhi weather is 32 degree celsius');
        }, 5000);
    });

    let bhopalWeather = new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve ('Bhopal weather is 30 degree celsius');
        }, 3000);
    });
}



