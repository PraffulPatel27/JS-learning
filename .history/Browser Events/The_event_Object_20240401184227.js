// <----------- The Event Object ------------->


// to show the event object in the console
const content = document.querySelector ('h1');

content.addEventListener ('click', function (event) {
    console.log (event);
})




let links = document.querySelectorAll ('a');

thirdLinks = links[2];

thirdLinks.addEventListener ('click', 
function (print) {
    print.preventDefault ();
});


