console.log ('Chaliye shuru karte hai');

// object create
let school = {
    Abhay : 20,
    Rahul : 50,
    
    // function inside the object it called as a method
    draw: function () {
        console.log ('I am a draw function');
    }
};

// Access object values
school.Abhay;
school.Rahul;

// calling like this <- then function full body show 
school.draw;

// calling like this <- then function body execute
school.draw();



// Question 1 : To create multiple objects at runtime?
// Answer :- two ways to do this using Factory function and Constructor function

// <-----------Factory function ---------->
   // through fucntion call we put the request for creation 
   // of new object
function createRectangle() {

    let rectangle = {
        length: 1,
        breadth: 2,
        
        // Methods are defined here
        draw () {
            console.log ('area of rectangle :'+ length * breadth);
        }
    };
    return rectangle;

    // return rectangle = {
    //     length: 1,
    //     breadth: 2,

    //     draw () {
    //         console.log ('area of rectangle : ' + length * breadth);
    //     }
    // };
}

// store in a variable
let rectangleObj1 = createRectangle ();
console.log ('Printing factory function ');
console.log (rectangleObj1);


// <----- Passing paramneters on factory function ----->
function areaOfRectangle(len, brea) {

    return rectangle = {
        length: len,
        breadth: brea,
        side : 'left',
        shape : 'circle',

        draw () {
            console.log ('area of rectangle : ' + length * breadth);
        }
    };
}

// store in a variable
let answer = areaOfRectangle (2, 5);
let asnwer2 = areaOfRectangle (3, 6);
let asnwer3 = areaOfRectangle (10, 12);
console.log (answer);




// <- Pascal Notation -> first letter of every  word is Capital -> NumberOfStudents

// <---------- Constructor Function ----------->

// Constructor function -> 
function Reactangle() {
    this.length = 1;
    this.breadth = 2;
    this.draw = function() {
        console.log ('drawing');
    }
}

// 'new' keyword in Javascript for returning a empty object

// object creation using constructor function
let rectangleObject = new Reactangle ();

