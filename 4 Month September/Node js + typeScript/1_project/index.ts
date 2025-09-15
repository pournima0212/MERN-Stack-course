//console.log("hello")

//template literals
const userName :string = "pournima"
//console.log("mu name is" + userName)

console.log(`my name is ${userName}`)

//spread operator

const firstArray : Number[] = [10,20,30,40]

const secondArray : Number[] = [50,60,70,80]

const finalArray = [...firstArray , ...secondArray]   // combining 2 arrays in one array

console.log(finalArray , "finalarray==")

//object

const userDetails = {
    name : "pournima",
    city : "karad"
}

const newUserDetails = {
    mobNo : 1234567890
}

const finalUserDetails = {
...userDetails,
...newUserDetails
}

console.log(finalUserDetails)