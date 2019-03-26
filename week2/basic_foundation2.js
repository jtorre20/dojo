//1.
function biggerSize(array) {
  array.forEach(number => {
    let index = array.indexOf(number);
    if (number > 0) {
      array[index] = "big";
    }
  });
  return array;
}

//2.
function printLowReturnHigh(array) {
  let low = array[0];
  let high = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < low) {
      low = array[i];
    } else if (array[i] > high) {
      high = array[i];
    }
  }
  console.log(low);
  return high;
}

//3.

function range(start, end) {
  let ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
}

function printOneReturnAnother(array) {
  console.log(range(array[1], array[array.length - 1]));
  return array.find(num => {
    return num % 2 !== 0;
  });
}
//4.
function doubleVision(array) {
  let newArr = [];

  array.forEach(number => {
    newArr.push(number * 2);
  });
  return newArr;
}
//5. 
function countPositives(array) {
    let count = 0;
    array.forEach(number => {
        // let index = array.indexOf(number);
        if (number > 0) {
            count += 1;
        }
        array[array.length - 1] = count
    });
    return array
}
//6. 
function evenAndOdds(arrroo) {
    arrroo.forEach(element => {
        let index = arrroo.indexOf(element)
        if (element % 2 !== 0) {
            (element == arrroo[index + 1] && element == arrroo[index + 2]) ? 
            console.log("that's odd") : console.log(element)

        }
        else if (element % 2 == 0) {
            (element == arrroo[index + 1] && element == arrroo[index + 2]) ? 
            console.log("even more so") : console.log(element)
        }

    });
}

//7. 
function incrementTheSeconds(arr){
    arr.forEach(number => {
      let index = arr.indexOf(number)
      if(number % 2 !== 0){
       arr[index] = number + 1
      }
      console.log(number)
    });
    return arr
}

//8. 

function previousLengths(array) {
  // ["hello", "coding", "awesome"]
  let dupArray = [...array]

  array.forEach(element => {
    let index = array.indexOf(element)
    if (index == 0) {
      array[index] = element;
    } else {
      array[index] = dupArray[index - 1].length
    }
  })
  return array
}

//9. 
// function addSeven(array) {
//   let dupArray = [...array]

//   dupArray.forEach(number => {
//     let index = dupArray.indexOf(number)
//     dupArray[index] = number + 7
//   });
//   return dupArray
// }

function addSeven(array){
  return array.map( number => number + 7 )
}

//10.
function reverse(arr) {
  for(let i = 0, j = arr.length-1; i < j; i++, j--){
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}