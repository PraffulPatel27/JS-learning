// <---- Dynamic Nature of Object ----->

function User () {
    this.login = 'Ajay123';
    this.password = '12345';

    this.saying = function () {
        console.log ('Hello');
    }
}
let manage = new User ();
console.log ('before added new manage);

// add new attributes on object and constructor
manage.signup = 'user details';
console.log (manage);

