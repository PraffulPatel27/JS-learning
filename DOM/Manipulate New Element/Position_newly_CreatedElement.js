// <-------- insertAdjacentHTML () ---------->

  // Has to be called with 2 arguments
  // 1st argument is location/position (before begin, after begin, before end, after end)
  // 2nd argument is the text/content to be inserted

  // (after begin , before end) in this Whenever it is used on that tag, its properties are also applied automatically.
  // (before begin , after end) in this Whenever it is used on that tag, its properties are not applied.

let content = document.querySelector ('#head');

let newText = document.createElement ('h3');  // <h3></h3>
newText.textContent = 'ABCD';              // <h3>ABCD</h3>

content.insertAdjacentElement ('beforebegin', newText);
  // <h3>ABCD</h3>
  // <h2 id="head"> This is the heading of h2 </h2>
  

