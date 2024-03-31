// <-------- removeChild () ---------->

  // It need two things 
  // 1. The element to be removed
  // 2. The element to be inserted before the element to be removed

  // (after begin , before end) in this Whenever it is used on that tag, its properties are also applied automatically.
  // (before begin , after end) in this Whenever it is used on that tag, its properties are not applied.

  let content = document.querySelector ('#head');

  let newText = document.createElement ('h3');  // <h3></h3>
  newText.textContent = 'ABCD';              // <h3>ABCD</h3>
  
  content.insertAdjacentElement ('beforebegin', newText);
    // <h3>ABCD</h3>
    // <h2 id="head"> This is the heading of h2 </h2>
    
  
  