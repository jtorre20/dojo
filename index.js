var x = 15;
var y = "Coding Dojo";
var x_array = [1, 5, 10, 15];
var y_array = ["Coding", "Dojo", "is", "awesome"];
document.write("hello"); // writes 'hello' on the document
document.write("hello", y); //writes 'hello Coding Dojo' on the document
console.log(y_array[3]); //logs the value in y_array index 3 which is 'awesome!';
//this prints 0 to 99
for (var i = 0; i < 100; i++) {
  console.log(i);
}
//loops through 1 to 100 and prints whether the number is odd or even
for (var j = 1; j <= 100; j++) {
  if (j % 2 == 0) {
    console.log(j, " is an Even number");
  } else {
    console.log(j, "is an Odd number");
  }
}
function sum(x, y) {
  console.log("Got the following two parameters", x, y);
  return x + y;
}
console.log(sum(5, 3)); //logs 8
console.log(sum(10, 15) + sum(3, 5)); //logs 33

var arr = [1, 3, 5, 8];

for (var i = 0; i < x.length; i++) {
  if (x[i] > 4) {
    x[i] = 0;
  }
}
console.log(x);

var x = 0;

for (var i = 1; i < 4; i = i + 2) {
  x = x + i;
  console.log(x);
  console.log(i);
}

function a() {
  console.log(55);
}

function a() {
  return 25;
  return 50;
}

console.log(a());

for (var i = 1; i < 100; i++) {
  if (i == 10) {
    break;
  }

  console.log(i);
}

for (var num1 = 1; num1 <= 3; num1++) {
  for (var num2 = 1; num2 <= 2; num2++) {
    console.log("Dojo");
  }
}

var x = [];
x[0] = "Hello";
x[1] = "World";
x[2] = 100;

function get_array() {
  var arr = [];
  var i = 1;

  while (i <= 255) {
    arr.push(i);
    i++;
  }
  console.log(arr);
}

// function returns the sum of all even numbers from 1 to 1000
function sum_even_numbers() {
  var sum = 0;

  for (i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }

  return sum;
}

//function returns the sum of all odd numbers from 1 to 5000

function sum_odd_numbers() {
  var sum = 0;

  for (i = 1; i <= 5000; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  return sum;
}

//write a function that returns the sum of all the values in an array

let arr = [1, 2, 5];

function iterArray(arr) {
  var sum = 0;

  arr.forEach(element => {
    sum += element;
  });

  return sum;
}

// Given an array with multiple values, write a function that
// returns the maximum numer in the array [3, -3, 5, 7] returns 7

let arr = [1, 5, 7];
// let max;

function maxInArray(arr) {
  return Math.max(...arr);
}

//Given an array with multiple values, write a
// funciton that returns the average of the values in the array [1, 3, 5, 7, 20] is 7.2

function avgOfArray(arr) {
  let sum = 0;
  let avg;
  arr.forEach(element => {
    sum += element;
  });
  avg = sum / arr.length;
  return avg;
}

//write a funciton that would return an array of all the odd numbers between 1 to 50

function oddNumbers() {
  let arr = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
}

// Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.
// For example if arr = [1, 3, 5, 7]
// and Y = 3, your function will return 2.
// (There are two values in the array greater than 3, which are 5, 7).

function greaterY(arr, Y) {
  let count = 0;
  arr.forEach(num => {
    if (num > Y) {
      count++;
    }
  });

  return count;
}

//Given an array with multiple values, write a function that replaces each value in the array with the product
// of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

let arr = [1, 5, 10, -2]


function squareVal(arr){

    arr.forEach(num => {
        var index = arr.indexOf(num)
        var sqval = Math.pow(num, 2)

        if(index !== -1){
            arr[index] = sqval
        }
    })
    return arr
}

// Given an array with multiple values, write a function that replaces any 
// negative numbers within the array with the value of 0. When the program 
// is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function noNeg(arr){
    arr.forEach(num => {
        let index = arr.indexOf(num)
        if(num < 0){
            arr[index] = 0
        }
    })
    return arr
}

// Given an array with multiple values, write a function that returns a new array that only contains the maximum, 
// minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(arr){
    let arrnew = []
    let i = 0

    let avg;
    let sum = 0

        arr.forEach(num => {
            avg = (sum += num )/arr.length
        })
    
    arrnew.push(Math.max(...arr), Math.min(...arr), avg);
    // arrnew.push(Math.min(...arr));
    // arrnew.push(avg)
    return arrnew
}

//Write a function that will swap the first and last values of any given array. 
// The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr){
    var zero = arr[0]
    var last = arr[arr.length - 1]
    while( i < arr.length) {
             arr[0] = last
             arr[arr.length -1] = zero
         i++
    }
    return arr
}

// Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. 
// For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numToStr(arr){
    
    arr.forEach(num => {
        let index = arr.indexOf(num)
        if(num < 0){
            arr[index] = 'Dojo'
        }
    })
    return arr
}

for(var x = 2; x < 6; x++){
    console.log(x)
}

var msg = 'codingdojo'

for (var x = 7; x < msg.length + 4; x++){
    console.log(x)
}

for(var x = 15; x > 5; x--){
    console.log(x)
    break
}


var x = 10

if(x == 10){
    console.log(x)
}
else {
    console.log('hello')
}

var message = 'dojo'

if (message == 'dojo' ) {
    console.log('coding' + message)
} 
else {
    console.log('ninja' + message)
}


for(var x = 18; x > 7; x--){
    console.log(x)
    break
}

var msg = 'hello'

for(var x = 22; x >msg.length + 7; x--) {
    console.log(x)
}

var msg = 'codingdojo'
for(var x = 2; x < msg.length - 2; x++){
    if( msg.length == 6){
        for(var i = 3; i < 7; i++){
            console.log(i)
        }
    }
    else {
        for(var i = msg.length; i > (msg.length - 3); i--){
            console.log(i)
        }
    }
}