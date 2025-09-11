// synchronous
 
console.log(1)
console.log(3)    // program execute line by line
console.log(2)

// asynchronous

console.log("First")
setTimeout(() => {   //if we provide asynchronoud operation in code that fucnctinality took time to execute so in this case further program execute 
    console.log("Second")  //means when providing asynchronous operation that program does not execute line by line
, 2000})
console.log("Third")

// asynchronous operation based on 3 operations




// 1) callback function

function firstFunction(newFunction){   // we can pass function as an argument of another function to execute later 
    console.log("call back function")
    newFunction();  // call back function
}

function secondFunction(){
    console.log("i am the function to get called")
}

firstFunction(secondFunction);

// 2) async await - this is latest virsion of promises and to get data from data base we use async await

// const getData = async () => {
//     try {
//         const userData = await user.find()
//     } catch (error) {
//         console.log(error)
//     }
// }

// 3) promises
