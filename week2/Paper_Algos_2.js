function printAverage(x){
    sum = 0;
    x.forEach(number => {
        sum += number
    });
    let avg = sum/x.length
    return avg
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([5,2,8]);
 console.log(y); // should log 5

 //2.

function returnOddArray() {
    for (let i = 1; i <= 255; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}
 y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]


