// <--------- Event Loop --------->

function addPara () {
    let para = document.createElement ('p');
    para.textContent = "Js is single threaded";
    document.body.appendChild (para);
}

function appendNewMessage () {
    let para = document.createElement ('p');
    para.textContent = "Kya haal chaal";
    document.body.appendChild (para);
}

addPara ();
appendNewMessage ();






// <---------- Asynch code --------->

 // async code is depend on the JS event loop.
 // Handling is done by the browser.



 // Process of execution of async code:
   // 1. Asynchronous operations, such as I/O operations or timers, are handled by the browser or Node.js runtime. When these operations are complete, corresponding functions (callbacks) are placed in the callback queue.
   // 2. 

