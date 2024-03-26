// <----------- Reduce array ------>

// sum of array
let arr = [1, 2, 3, 4];
let sum = 0;

for (let value of arr) {
    sum = sum + value;
}
console.log (sum);


// Using reduce function to reduce the array into a single value
let totalSum = arr.reduce ((accumulator, currentValue) => accumulator + currentValue, 0);
console.log ('using reduce method : ' + totalSum);      // 10



let ans = arr.reduce ((accumulator, currentValue) => {
    console.log (`accumulator - ${accumulator} , currentValue - ${currentValue}`);
});


