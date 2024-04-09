// <---------- Fetch API ---------->

async function utility () {
    let content = await fetch ('https://google-translate1.p.rapidapi.com/language/translate/v2/detect');
    
    let output = await content.json ();
    // it converts the data into the json format.

    console.log (output);
}

utility ();

