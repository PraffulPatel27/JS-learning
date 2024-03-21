// <---- Dynamic Nature of Object ----->

function User () {
    this.login = 'Ajay123';
    this.password = '12345';

    this.saying = function () {
        console.log ('Hello');
    }
}
let manage = new User ();
console.log (manage);

// add new attributes on object and constructor
manage.signup = 'user details';
console.log (manage);

// delete any attribute
delete manage.signup;
console.log (manage);



// <----- Inbuilt constructor funciton ------>

manage.constructor   // function USer () {......}

User.constructor     // inbuilt constructor funciton



let Rectangle12 = new Function (
    'length', 'breadth',
    `this.length = length;
    this.breadth = breadth;
    this.draw = function () {
        console.log ('drawing');
}`);

// object creation using Rectangle1
let rect = new Rectangle12 (2, 3);
console.log (rect);



// <------ functions are objects --------->

  // access values of functions using '. or dot' opearator

  

