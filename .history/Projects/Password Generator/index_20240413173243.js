const inputSlider = document.querySelector ("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector ("[data-passwordDisplay]");
const copyBtn = document.querySelector ("[data-copy]");
const copyMsg = document.querySelector ("[data-copyMsg]"); 
const uppercaseCheck = document.querySelector ("#uppercase");
const lowercaseCheck = document.querySelector ("#lowercase");
const numberCheck = document.querySelector ("#numbers");
const symbolsCheck = document.querySelector ("#symbols");
const indicator = document.querySelector ("[data-indicator]");
const generateBtn = document.querySelector (".generateButton");
const allCheckBox = document.querySelectorAll ("input[type=checkbox]");


let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider ();
// set strength circle color to grey


// set passswordLength
function handleSlider () {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = 10;
}


// set strength circle color to grey
function setIndicator (color) {
    indicator.style.backgroundColor = color;
    // shadow
    indicator.style.boxShadow = `0 0 12px 1px ${color}`;
}


function getRandomInterger (min, max) {
    return Math.floor (Math.random () * (max - min)) + min;
}

function generateRandomNumber () {
    return getRandomInterger (0, 9)
}





