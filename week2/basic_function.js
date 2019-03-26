
// predicted correctly 14/15

//1. 
function a(){
    return 35;
}
console.log(a())

// prediction: 35
// result:  35

//2. 
function a(){
    return 4;
}
console.log(a()+a());
// prediction: 8
// result: 8

//3. 
function a(b){
    return b;
}
console.log(a(2)+a(4));
// prediction: 6
// result: 6

//4. 
function a(b){
    console.log(b);
return b*3;
}
console.log(a(3));

// prediction: 3, 9
// result: 3, 9

//5. 
function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));

// prediction: 10, 40
// result: 40

//6. 
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

// prediction: 4
// result: 4

//7.
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

// prediction: 10, 3, 30
// result: 10, 3, 30

//8. 

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

// prediction: 3, 4
// result: 3, 4

//9. 

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

// prediction: 2, 5, 8, 11
// result: 2, 5, 8, 11

//10. 
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

// prediction:  0, 1, 2, 3, 4, 5, 6, 7, 8, 9  
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9   0

// result: 
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9  
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9   0

//11. 
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
// prediction: undefined
// result: undefined

// 12. 
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
// prediction: undefined
// result: undefined

//13. 
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

// prediction: 10
// result: 10

//14. 
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

// prediction: 15 10
// result: 15, 10

//15. 
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

// prediction: 15, 15
// result: 15, 15





