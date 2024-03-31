// <-------- removeChild () ---------->

  // It need two things 
  // 1. Must know the Parent of the element
  // 2. Must know the child element which is to be removed


let content = document.querySelector ('.heading');

let newText = document.createElement ('h3');  // <h3></h3>
newText.textContent = 'ABCD';              // <h3>ABCD</h3>
  
content.insertAdjacentElement ('beforebegin', newText);
    // <h3>ABCD</h3>
    // <h2 id="head"> This is the heading of h2 </h2>




  console.log (content);
  // <h3>ABCD</h3>
  // <h2 id="head"> This is the heading of h2 </h2>

// <----- remove element ------->
content.removeChild (newText);  // <h3>ABCD</h3> will be removed

  console.log (content);
  // <h2 id="head"> This is the heading of h2 </h2>






// <------- remove child without know the parent ----->

let child = document.querySelector ('#head');

child.remove ();


    
  
  