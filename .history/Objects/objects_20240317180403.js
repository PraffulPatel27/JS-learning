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

// calling like this <- then function full body show of 
school.draw;
school.draw();
