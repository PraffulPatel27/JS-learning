const countValue = document.querySelector ('#counter');

const increment = () => {
    // get value from UI
    let value = parseInt (countValue.innerText);
    value = value + 1;

    // Update the value
    countValue.innerText = value;
}

const decrement = () => {
    
}
