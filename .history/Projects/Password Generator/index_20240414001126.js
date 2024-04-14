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
const symbols = '~`!@#$%^&*()_-+={[}]|\:;"<,>.?/';


let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider ();
// set strength circle color to grey


// set passswordLength
function handleSlider () {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}


// set strength circle color to grey
function setIndicator (color) {
    indicator.style.backgroundColor = color;
    // shadow
    indicator.style.boxShadow = `0 0 12px 1px ${color}`;
}

// Generate random integer
function getRandomInterger (min, max) {
    return Math.floor (Math.random () * (max - min)) + min;
}

function generateRandomNumber () {
    return getRandomInterger (0, 9);
}


// Generate random lowercase 
function generateRandomLowercase () {
    return String.fromCharCode (getRandomInterger (97, 122));
}

// Generate random upercase 
function generateRandomUppercase () {
    return String.fromCharCode (getRandomInterger (65, 90));
}

// Generate random symbol 
function generateRandomUppercase () {
    const randmNum = getRandomInterger (0, symbols.length);
    return symbols.charAt (randmNum);
}


function calculateLength () {
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if (uppercaseCheck.Checked) {
        hasUpper = true;
    }
    else if (lowercaseCheck.Checked) {
        hasLower = true;
    }
    else if (numberCheck.Checked) {
        hasNumber = true;
    }
    else if (symbolsCheck.Checked) {
        hasSymbol = true;
    }


    if (hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8) {
        setIndicator ('#0f0');
    }
    else if ((hasLower || hasUpper) && (hasNumber || hasSymbol) && passwordLength >= 6) {
        setIndicator ('#ff0');
    }
    else {
        setIndicator ('#f00');
    }
}



// Copy password to clipboard
async function copyContent () {
    try {
        // It will return a promise that will resolve when the text has been copied to the clipboard
        await navigator.clipboard.writeText (passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch (e) {
        copyMsg.innerText = "failed";
    }

    // to make copy wala span visible
    copyMsg.classList.add ("active");

    setTimeout ( () => {
        copyMsg.classList.remove ("active");
    }, 2000);
}



// Check if all checkboxes are checked or unchecked
function hadleCheckBocChange () {
    checkCount = 0;
    allCheckBox.forEach (checkbox) => {
        if (checkbox.Checked) {
            checkCount++;
        }
    }
}



// Slider event listener
inputSlider.addEventListener ("input", (e) => {
    passwordLength = e.target.value;
    handleSlider ();
});


// Password is copy when password is not empty
copyBtn.addEventListener ('click', () => {
    if (passwordDisplay.value) {
        copyContent ();
    }
});




// Generate password event listener
generateBtn.addEventListener ('click', () => {

});

