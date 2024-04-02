// <--------- removeEventListener  ---------->

  // loose equality  :  == 
  // strict equality :  ===

  // loose equality (Js allow) :- where JS will try to convert the items being compared to same type.

  function print () {
    console.log ('Hi');
}

document.addEventListener ('click', print);

document.removeEventListener ('click', print);

