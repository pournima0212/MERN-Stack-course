//ternary operator in java

console.log("The ternary operator in javascript")

let a = 10;

let b = 20;

if(a==10){
    console.log("value of A is same with 10")
}
else{
    console.log(" value of A is not same with 10")
}

console.log( a==5 ? true : false)

console.log( a==10 ? true : false)

console.log( true ? true : false)

console.log( false ? true : false)

console.log( false ? "this is good " : "this is bad")

console.log( a==10 && "Good")     //if value is true before && operator then it will run statement or value after && oprator

console.log( a==1 && "Good")     //this line never run 

console.log( a==1 && b==5 && "Good") // 1st value is false thats why it doesnt run further code or return false

//using OR operator (||)

console.log( a==10 || b==5 || "Good") // by using or operator if before value is false still it run further code or if any 1 condition is true it run further operation
