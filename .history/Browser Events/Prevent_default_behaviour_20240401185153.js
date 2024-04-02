// <---------- Prevent default behaviour ---------->

  // Prevent default behaviour of 

let links = document.querySelectorAll ('a');

thirdLinks = links[2];

thirdLinks.addEventListener ('click', 
function (print) {
    print.preventDefault ();
    console.log ('maza aaya, aacha laga');
});
