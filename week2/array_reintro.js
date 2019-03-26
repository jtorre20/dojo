let arr = [1, 2, 3, 4, 5];
let y = 2;

// 1. Given an array and a value Y, count and print the number of array values greater than Y.
function greaterThanY(array, y) {
    array.forEach(number => {
        if(number > y){
            console.log(number)
        }
    });
}

//2. Given an array, print the max, min and average values for that array.

function maxMinAvg(array) {
    let max = Math.max(...array);
    let min = Math.min(...array);
    let sum = 0;
    array.forEach(number => {
        sum += number;
        // return sum;
    });
    let avg = (sum / array.length)
    console.log(max, min, avg);
}

// 3. Given an array of numbers, create a function that returns a 
// new array where negative values were replaced with the string ‘Dojo’.   
// For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5]. 

function replaceNegatives(array){

    array.forEach(number => {
        let index = array.indexOf(number);
        if (number < 0){
            array[index] = "Dojo";
        }
    });
    console.log(array);
}
//4. Given array, and indices start and end, remove vals in that index range, 
// working in-place (hence shortening the array).  For example, 
// removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function removeValues(array, x, y){
    array.splice(x, (y-x + 1))
    return array
}
