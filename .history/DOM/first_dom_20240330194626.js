// <-------- DOM Starting here ----------->

  // In the console of inspect 


// <--- fetch the ID ---->

document.getElementById ('head');



// <--- fetch the class ---->
document.getElementsByClassName ('heading');


// <---- fetch the tag using tag name ----->
document.getElementsByTagName ('div');



// <------ Query selector -------->
   // It give single item selector

   // for ID
document.querySelector ('#head');

   // for class
document.querySelector ('.heading');

   // for tag
document.querySelector ('h2');


function myFunction() {
    let x = document.getElementById("gfg");

    x.querySelector("p").style.backgroundColor = "Green";
    x.querySelector("p").style.color ="white";
}




// <------ Query selector ALL-------->
   // It give all items which match the selector

   // for ID
document.querySelectorAll ('#head');

   // for class
document.querySelectorAll ('.heading');

   // for tag
document.querySelectorAll ('h2');

