// <------ Date and Time ------>

let date = new Date();

console.log (date);


// <---- Date and time change ---->
let date2 = new Date ('September 27 2003 02:10');
console.log (date2);


// <----- custom date and time ---->
   // <----- Indexing of month starts from 0 ---->
   // 0 - January
    // 1 - February .........
let date3 = new Date (2021, 1, 20, 10);
console.log (date3);



// <------ set the date and time ------>
console.log (date3.setFullYear (2022));


// <------ get the date and time ------>
console.log (date.getDate ());
