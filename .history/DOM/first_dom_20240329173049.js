// <-------- DOM Starting here ----------->

// <--- fetch the ID ---->

  document.getElementById ('head');



// <--- fetch the class ---->
document.getElementsByClassName ('heading');




// <------ Query selector -------->
   // It give single item selector

   // for ID
document.querySelector ('#head');

   // for class
document.querySelector ('.heading');

   // for tag
document.querySelector ('h2');




// <------ Query selector ALL-------->
   // It give all items which match the selector

   // for ID
document.querySelectorAll ('#head');

   // for class
document.querySelectorAll ('.heading');

   // for tag
document.querySelectorAll ('h2');



// <-------- InnerHTML -------->
  // It gives the inner HTML data of selected item and also 
  // change the data of selected item by assigning value to it.


let ans = document.querySelector ('.heading');
ans.innerHTML 


