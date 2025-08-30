const newArray = ["pournima" , "sanket" , "akshada" , "saniya" , "ankita"] // index of array start from 0
                
// 1. Map  Creates a new array by applying a function to each element.
const a = [ 91 , 92 , 93 , 10 , 50 , 40 , 94 , 95]

const b = a.map((each) => each * 2)

console.log(b)

// 2. Filter Returns a new array with elements that satisfy a condition.
const c = a.filter((each) => each > 90)

console.log(c)

// 3. push
newArray.push("Harish")
a.push("1")

console.log(newArray , "Add element")
console.log(a)


// 4. pop

newArray.pop()

console.log(newArray , " Remove element")