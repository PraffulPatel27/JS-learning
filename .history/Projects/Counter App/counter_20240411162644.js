const countValue = document.querySelector ('#counter');

const increment = () => {
    // get value from UI
    let value = parseInt (countValue.innerText);
    value = value + 1;

    
    countValue.innerText = value;
}

const decrement = () => {
    
}
