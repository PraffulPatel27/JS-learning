// <--------- removeEventListener  ---------->

  // loose equality  :  == 
  // strict equality :  ===

  // loose equality (Js allow) :- where JS will try to convert the items being compared to same type.

  function print () {
    console.log ('Hi');
}

document.addEventListener ('click', print);

document.removeEventListener ('click', print);
 // Now nothing will print and event listeners are removed from the document


// If we use like this then not removed events
