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


   
   // Async code works on the principle of event loop.
     // <- 


 // Process of execution of async code:
   // 1. Asynchronous operations, such as I/O operations or timers, are handled by the browser or Node.js runtime. When these operations are complete, corresponding functions (callbacks) are placed in the callback queue.
   // 2. The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution.
   // 3. The event loop continues this process, ensuring that the call stack is always empty before taking the next function from the callback queue.

