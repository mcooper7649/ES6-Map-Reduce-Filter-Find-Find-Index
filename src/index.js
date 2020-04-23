var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double (x){
//   return x * 2;
// }

// const newNumbers = numbers.map(double)
// console.log(newNumbers)

//Filter - Create a new array by keeping the items that return true.


// const newNumbers = numbers.filter(function (num){
// return num > 10
// });

// console.log(newNumbers)

//Reduce - Accumulate a value by doing something to each item in an array.

// const newNumbers = numbers.reduce(function(accumulator, currentNumber){
//   console.log("current accumulator= " + accumulator)
//   console.log("current number= " + currentNumber)
//   return accumulator + currentNumber
// })


//Find - find the first item that matches from an array.

// const newNumbers = numbers.find(function(num){
//   return num > 10
// })

//FindIndex - find the index of the first item that matches.

const newNumbers = numbers.findIndex(function(num){
  return num > 10
})

console.log(newNumbers)