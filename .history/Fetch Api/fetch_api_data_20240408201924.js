// <---------- Fetch API ---------->

async function utility () {
    let content = await fetch ('https://jsonplaceholder.typicode.com/todos/1');
    
    let output = await content.json ();
    // it converts the data into the json format.

    console.log (output);
}

utility ();

