// <-------- Avoid to many event -------->

// let myDiv = document.createElement ('div');

// for (let i=1; i<=100; i++) {
//     let newElement = document.createElement ('p');
//     newElement.textContent = 'This is paragraph ' + i;

//     newElement.addEventListener ('click', function (event) {
//         console.log ('I have clicked on para');
//     });
//     myDiv.appendChild (newElement);
// }
// document.body.appendChild (myDiv);




// Optimise the code separately calling eventListener function

let myDiv = document.createElement ('div');

function paraStatus (event) {
    console.log ('I have clicked on para');
}
newElement.addEventListener ('click', paraStatus);

for (let i=1; i<=100; i++) {
    let newElement = document.createElement ('p');
    newElement.textContent = 'This is paragraph ' + i;

    myDiv.appendChild (newElement);
}
document.body.appendChild (myDiv);


