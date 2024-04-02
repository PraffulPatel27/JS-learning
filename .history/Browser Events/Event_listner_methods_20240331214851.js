// <--------- addEventListener ---------->

// Syntax :- 
      // <event_target>.addEventListener (<event-to-listen-for>, <function-to-run-when-event-happen>);


// 3 things need 
  // - Event-target : Component
  // - Event-type   : Click to scroll 
  // - function     : define what to do when event happen


let content = document.querySelector ('h1');

console.log (content);   // <h1> Starting of Listner Method </h1>

content.addEventListener ('click', function () {
      content.style.backgroundColor = 'yellow';
      content.style.color = 'green';
});



function cickEventCount () {
      console.log ('I have clicked on the document');
}

content.addEventListener ('click', cickEventCount);
// It will counting when we clicked on the document and h1 both





// <--------- addEventListener ---------->