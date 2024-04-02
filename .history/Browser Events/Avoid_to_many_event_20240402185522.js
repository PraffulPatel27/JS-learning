// <-------- Avoid to many event -------->

let myDiv = document.createElement ('div');

for (let i=1; i<=100; i++) {
    let newElement = document.createElement ('p');
    newElement.textContent = 'This is paragraph ' + i;

    newElement.addEventListener ('click', function (event) {
        console.log ('I have clicked on para');
    });
    myDiv.appendChild (newElement);
}
document.body.appendChild (myDiv);





// Optimise the code separately calling eventListener function

let myDiv2 = document.createElement ('div');

function paraStatus (event) {
    // console.log ('I have clicked on para');
    console.log ('Para' + event.target.textContent);
}
myDiv2.addEventListener ('click', paraStatus);

for (let i=1; i<=100; i++) {
    let newElement = document.createElement ('p');
    newElement.textContent = 'This is paragraph ' + i;

    myDiv.appendChild (newElement);
}
document.body.appendChild (myDiv2);




// Do exercise -<- Apply EventListener on specific tag

let element = document.querySelector ('#wrapper');

element.addEventListener ('click', function (event) {
    // using that condition it only works for span 
    if (event.target.nodeName === 'SPAN') {
        console.log ('span pr click kia hai' + event.target.textContent);
    }
})
