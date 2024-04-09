// <----------- Send data on Api ------------>

async function helper () {

    let options = {
        method : 'POST',
        body : JSON.stringify ({
            title : 'Sendiing data on Api',
            body : 'first time sending data on api',
            userId : 121,
        }),
        Headers : {
            'Content-type' : 'application/json; charset=UTF-8',
        },
    };

    let content = await fetch ('https://jsonplaceholder.typicode.com/posts', options);
    let response = content
}

