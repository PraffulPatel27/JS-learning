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
            ''
        }
    }
}

