// <-------- InnerHTML -------->
  // It gives the inner HTML data of selected item and also 
  // change the data of selected item by assigning value to it.

  // It treat the particular selected item as a text and inside the any tag 
  // are not treated as a text and it will be trying to print the that tag

let ans = document.querySelector ('.heading');
  ans.innerHTML; 
  
  
  
  
// <-------- OuterHTML -------->
    // It gives the outer HTML data of selected item and also 
    // change the data of selected item by assigning value to it.
  
let wholeContent = document.getElementById ('gfg'); 
  document.write (wholeContent.outerHTML);



// <-------- textContent -------->
   // It treat the particular selected item as a text and inside the any tag 
   // are also treated as a text

   // If any content is set to dispplay hidden then it will be printed in the text content

let company = document.querySelector ('.companyAmz');
company.textContent;



// <-------- innerText -------->
  // If any content is set to dispplay hidden then it will not be printed in the inner text 

company.innerHTML;