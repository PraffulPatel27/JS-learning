// Example :- Simultaneously running the multiple promises.
 

let wada1 = new Promise (function (resolve, reject) {
    setTimeout (() => {
        console.log ('setTimeout 1 started');
    }, 2000);
    resolve (true);
});

let output = wada1.then(() => {
    let wada2 = new Promise (function (resolve, reject) {
        setTimeout (() => {
            console.log ('setTimeout 2 started');
        }, 3000);
        resolve ('waada 2 resolved');
    })

    return wada2;
});

output.then ((value) => { console.log (value) });