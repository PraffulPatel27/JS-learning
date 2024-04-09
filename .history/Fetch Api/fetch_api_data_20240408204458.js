// <---------- Fetch API ---------->

async function utility () {
    let content = await fetch ('https://jsonplaceholder.typicode.com/todos/1');

    // Weather API data
    // let content = await fetch ('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m');
    
    let output = await content.json ();
    // it converts the data into the json format.

    console.log (output);
}

utility ();

