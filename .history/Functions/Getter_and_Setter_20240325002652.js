// GETTER AND SETTER
 
  // GETTER -> access the properties
  // SETTER -> change or mutate the properties

let person = {
    fname : 'John',
    lname : 'Doe'
};

console.log (person);      // { fname: 'John', lname: 'Doe' }


function fullName () {
    return `${person.fname} ${person.lname}`;
}

console.log (fullName ());     // John Doe





let person2 = {
    fname : 'John',
    lname : 'Doe',

    // This is the getter method
    get fullNamePerson () {
        return `${this.fname} ${this.lname}`;
    },

    // This is the setter method
    set fullNamePerson (value) {
        let parts = value.split (' ');
        this.fname = parts[0];
        this.lname = parts[1];
    }
};

console.log (fullNamePerson ())
