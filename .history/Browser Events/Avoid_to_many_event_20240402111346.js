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
cod


