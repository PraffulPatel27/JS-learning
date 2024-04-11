const countValue = document.querySelector ('#counter');

function increment () {
    // get value from UI
    let value = parseInt (countValue.innerText);

    // Update the value in UI
    value = value + 1;

    // set the value in UI
    countValue.innerText = value;
}

function decrement = () => {
    // get value from UI
    let value = parseInt (countValue.innerText);

    // Update the value in UI
    value = value - 1;

    // set the value in UI
    countValue.innerText = value;
}
