function printUpTo(x){
    // your code here

    if(x < 0){
        console.log(x);
        return false
    } else {
        for(let i = 1; i < x; i++){
       
            console.log(i)
        }
    }
    
  }
  printUpTo(1000000); // should print all the integers from 1 to 1000000
  y = printUpTo(-10); // should return false
  console.log(y); // should print false

  //2. 
  function printSum(x){
    var sum = 0;
    //your code here
    for(let i = 0; i < x; i++){
        console.log(i)
        sum += i
        console.log("sum: ",sum)
    }
    return sum
  }
  y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32640

  //3.
  function printSumArray(x){
    var sum = 0;
    x.forEach(number => {
        sum += number
    });
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6