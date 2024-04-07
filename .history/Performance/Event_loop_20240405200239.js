// adding 100 Para

const t1 = performance.now ();
for (let i=1; i<=100; i++) {
    let newElement = document.createElement ('p');
    newElement.textContent = "This is para " + i;

    document.body.appendChild (newElement);
}

const t2 = performance.now ();
console.log ("Time taken to add 100 para " + (t2-t1) + " ms");



// Optimising a bit 
const t3 = performance.now ();
let myDiv = document.createElement ('div'); 
for (let i=1; i<=100; i++) {
    let element = document.createElement ('p');
    element.textContent = "This is para " + i;

    myDiv.appendChild (element);
}

document.body.appendChild (myDiv);
const t4 = performance.now ();
console.log ("Time taken to add 100 para " + (t4-t3) + " ms");



// Reflow and Repaint
  // Reflow: When the layout of the page changes, the browser has to re-render the page. This is called reflow.
  // Repaint: When the visual appearance of the page changes, the browser has to repaint the page. This is called repaint.

  

    // Reflow is more expensive than repaint. Reflow is a subset of repaint.
    

