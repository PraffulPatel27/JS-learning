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

function User2 () {
    length: 1;
    breadth : 2;
    draw = function () {
        console.log('drawing');
    }
}

let ans = new User2 ();

ans.constructor;    // function USer2 () {......}
User2.constructor   // Inbuilt constructor funciton

// Inbuilt constructor funciton
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

  

