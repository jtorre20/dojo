// .1  Return the given array, after setting any negative values to zero.  
// For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].

function resetNegatives(array) {
    array.forEach(number => {
        let index = array.indexOf(number)
        if (number < 0) {
            array[index] = 0
        }
    });
    return array;
}

//2. Given an array, move all values forward by one index, dropping the first 
// and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].

function moveForward(array) {
  let last = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  if (last) {
    array[last] = 0;
  }
  return array;
}

//3. Given an array, return an array with values in a reversed order.  
// For example, returnReversed([1,2,3]) should return [3,2,1].

function reverse(array){
     return array.reverse()
}

//4. Create a function that changes a given array to list each original element twice, 
// retaining original order.  Have the function return the new array.  
// For example repeatTwice( [4,”Ulysses”, 42, false] ) should return 
// [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function repeatTwice(array) {
  let newarr = [];

  for (let i = 0; i < array.length; i++) {
    newarr.push(array[i]) && newarr.push(array[i]);
  }
  return newarr;
}