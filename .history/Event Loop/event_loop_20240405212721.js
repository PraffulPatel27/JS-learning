// <--------- Event Loop --------->

function addPara () {
    let para = document.createElement ('p');
    para.textContent = "Js is single threaded";
    document.body.appendChild (para);
}

function appendNewMessage () {
    let para = document.createElement ('p');
    para.textContent = "Kya haal ch";
    document.body.appendChild (para);
}

