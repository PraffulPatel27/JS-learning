// adding 100 Para

const t1 = performance.now ();
for (let i=1; i<=100; i++) {
    let newElement = document.createElement ('p');
    newElement.textContent = "This is para " + i;

    document.body.appendChild (newElement);
}

const t2 = performance.now ();



// Optimising a bit 
let myDiv = document.createElement ('div');
for (let i=1; i<=100; i++) {
    let newElement = document.createElement ('p');
    newElement.textContent = "This is para " + i;

    document.body.appendChild (newElement);
}

