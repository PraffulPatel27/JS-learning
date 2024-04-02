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
      content.style.backgroundColor = 'yellow';
});


