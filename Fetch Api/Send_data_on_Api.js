// <----------- Send data on Api ------------>

async function helper () {

    let options = {
        method : 'POST',
        body : JSON.stringify ({
            title : 'Sendiing data on Api',
            body : 'first time sending data on api',
            userId : 121,
        }),
        headers : {
            'Content-type' : 'application/json; charset=UTF-8',
        },
    };

    let content = await fetch ('https://jsonplaceholder.typicode.com/posts', options);
    let response = content.json ();

    return response;
}


async function utility () {
    let ans = await helper ();
    console.log (ans);
}

utility ();