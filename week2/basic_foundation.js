//1. 
function oneUpTo(num){
    let arr = [];

    for(let i = 0; i <= num; i++) {
        arr.push(i);
    }
    return arr
}

//2. 
function sumUp(num){
    let sum = 0;
    for(let i = 0; i < num; i++){
        
        if(i % 2 == 0){
            sum += i
        }
    }
    return sum
}

//3. 
function sumOfOdd(num){
    let sum = 0;

    for(let i = 1; i <= num; i++) {
        if(i % 2 !== 0){
            sum += i
        }
    }
    return sum;
}

//4. 

function addArray(array){
    let sum = 0;

    array.forEach(number => {
        sum += number;
    });
    return sum;
}

//5. 
function findMax(array){
    return Math.max(...array)
}

//6. 
function findAvg(array){
    let sum = 0;
    array.forEach(number => {
        sum += number;
    });
    return (sum/array.length)
}

//7. 
function arrayOdd(num) {
    let newArr = [];
    for (let i = 1; i < num; i++) {
        if (i % 2 !== 0) {
            newArr.push(i)
        }
    }
    return newArr;
}

//8. 
function greaterThanY(array, y) {
    let count = 0;

    array.forEach(number => {
        if (number > y) {
            count += 1
        }
    });
    return count;
}

//9. 
function squares(array){
    let newArr = [];
    array.forEach(number => {
        let squared = number * number;
        newArr.push(squared);
    });
    return newArr;
}

//10. 
function negatives(array){
    array.forEach(element => {
        let index = array.indexOf(element)
        if(element < 0){
            array[index] = 0
        }
    });
    return array;
}

//11. 
function maxMinAvg(array){
    let newArr = [];
    
    let sum = 0;
    array.forEach(number => {
        sum += number;
    });

    let avg = (sum/ array.length)
    newArr.push(Math.max(...array), Math.min(...array), avg);
    return newArr

}

//12. 
function swapValues(array){
    let first = array[0];
    let last = array[array.length - 1]

    array[0] = last;
    array[array.length - 1] = first
    return array;
}

//13. 
function numberToString(array){
    array.forEach(element => {
        let index= array.indexOf(element);
        if(element < 0 ) {
            array[index] = "Dojo";
        }
    });
    return array;
}