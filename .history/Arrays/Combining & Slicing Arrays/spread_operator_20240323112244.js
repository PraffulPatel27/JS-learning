// <--------- Combinning using spread operator ------->

let first = [1, 2, 3, 90, 7];
let second = [4, 5, 6];

let combined = [...first, ...second];
console.log (combined);


let combine2 = [...first, 'a', ...second, 'b'];
console.log (combine2);

let combine3 = [...first, 'a', false, ...second, 'b', true];
console.log (combine3);



// <----- create copy of array using spread operator ------->
let another = [...first];
console.log (another);
