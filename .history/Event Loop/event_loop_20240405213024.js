// <--------- Event Loop --------->

function addPara () {
    let para = document.createElement ('p');
    para.textContent = "Js is single threaded";
    document.body.appendChild (para);
}

function appendNewMessage () {
    let para = document.createElement ('p');
    para.textContent = "Kya haal chaal";
    document.body.appendChild (para);
}

addPara ();
appendNewMessage ();






// <---------- A

