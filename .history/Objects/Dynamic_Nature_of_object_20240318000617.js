// <---- Dynamic Nature of Object ----->

function User () {
    this.login = 'Ajay123';
    this.password = '12345';

    saying = function () {
        console.log ('Hello');
    }
}

let manage = new User ();


