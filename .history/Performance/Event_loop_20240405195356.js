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
console.log ("Time taken to add 100 para " + (t2-t1) + " ms");

