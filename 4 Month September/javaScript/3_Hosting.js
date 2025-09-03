
myFunction(); // if we cal call normal function at top of the page it call that perticular function and execute code

//callFunction();  // but if we can call arrow funtion at top of the page it throws error because arror function stored in new variable

console.log(a)  // it retuns undefine error because java script execute line by line
var a = 10
console.log(a)  // it shows value of a

console.log(b)   // it also shows error that before initialization we can not access value of b
let b = 50
console.log(b)  // it returns value of b

function myFunction(){
    try {
        console.log("i an normal function")
    } catch (error) {
        console.log(error)
    }
}



const callFunction = () => {
    try {
        console.log("i am arrow function")
    } catch (error) {
        console.log(error)
    }
}

callFunction();