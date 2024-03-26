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





