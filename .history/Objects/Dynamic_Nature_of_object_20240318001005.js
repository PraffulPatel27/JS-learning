// <---- Dynamic Nature of Object ----->

function User () {
    this.login = 'Ajay123';
    this.password = '12345';

    this.saying = function () {
        console.log ('Hello');
    }
}
console.log
let manage = new User ();

// add new attributes on object and constructor
manage.signup = 'user details';
console.log (manage);

