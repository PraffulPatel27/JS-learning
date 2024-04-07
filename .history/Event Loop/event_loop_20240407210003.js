// <--------- Event Loop --------->

// Synchrnous code:
      // Occurs at the same time and process 


// <---------- Asynch code --------->

 // async code is depend on the JS event loop.
 // Handling is done by the browser.


   
   // Async code works on the principle of event loop.
     // <- first it will execute the synchronous code (printing and others), and function if comes then it will go
     // to the browser and then it goes to the queue and queue will be not executed until the call stack is empty. 


 // Process of execution of async code:
   // 1. Asynchronous operations, such as I/O operations or timers, are handled by the browser or Node.js runtime. When these operations are complete, corresponding functions (callbacks) are placed in the callback queue.
   // 2. The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution.
   // 3. The event loop continues this process, ensuring that the call stack is always empty before taking the next function from the callback queue.

