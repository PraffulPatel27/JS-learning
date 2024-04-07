// <--------- Call Stack ------------>

 // <--- Single Threaded --->

 // JavaScript is a single threaded, meaning that it can only execute one thing at a time. 
  // This is because it has only one call stack.
 // It is also called as synchronous language.




// Observation:
  // 1. 'Run-to-completion' nature to code.
  // 2. JS does not execute multiple lines/functions at the same time.



// Example : - 

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