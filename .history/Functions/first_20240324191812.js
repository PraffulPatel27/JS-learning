// <------- functions start here -------->

// functiono call and invoke
fun ();
// calling function before declaring (it is run without any error)
  // because of the hoistiing -< Hoisting is a process of moving function 
  // decalartion to the top of the file  


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
call ();     // here 'call' holds the value of the function 'stand' and then it is called


// <----- Anonymous function assignment ----->
let stand2 = function () {
    console.log ('Anonymous function -<- Saying');
};

stand2 ();