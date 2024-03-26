// <------- functions start here -------->

// functiono call and invoke
fun ();
// calling function before declaring (it is run without any error)
  // because the hoisting -<- the hoisting is that while the js code run 
  // the all functions declaration (body) goes to the top of the file and then 
  // the calling of the function is working smoothly


// function declaration
function fun () {
    console.log ('lets do some fun');
}

// functiono call and invoke
fun ();





// <------- function assignment --------->
  // there are two type of function assignment   


// <----- Named function assignment ----->
// stand ();
  // while using function assignment, we cannot call function
  //  before the declaration

let stand = function say () {
    console.log ('Saying');
};

stand ();   // invoking or calling a function using variable

// say ();  
 // it will give error because say is not defined not called

let call = stand;
call ()
;


// <----- Anonymous function assignment ----->
let stand2 = function () {
    console.log ('Saying');
};