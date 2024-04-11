const countValue = document.querySelector ('#counter');

const increment = () => {
    // get value from UI
    let value = parseInt (countValue.innerText);

    // Update the value in UI
    value = value + 1;

    // 
    countValue.innerText = value;
}

const decrement = () => {
    
}
