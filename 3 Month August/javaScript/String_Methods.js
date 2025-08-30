const fullName = "Pournima"
            //    01234567   

//  length → Returns string length.
const stringLength = fullName.length
if(fullName.length > 0){
    console.log("String length is greater than 0 ")
}else{
    console.log("String length is Not greater than 0 ")
}

//  toUpperCase() → Converts to uppercase.
console.log(fullName.toUpperCase() , " - String is in Upper Case")


//  toLowerCase() → Converts to lowercase.
console.log(fullName.toLowerCase() , " - String is in Lower Case")


//  trim() → Removes extra spaces.
const extraSpaceName = "   Pournima Mane     "
console.log(extraSpaceName.trim() , "Remove extra space")

console.log(extraSpaceName.trimStart() , "Start space remove ")

console.log(extraSpaceName.trimEnd() , "End space remove ")


//  charAt() → Returns character at index.
console.log(fullName.charAt(2) , "Check cahractar on 2 index")


//  indexOf() → First occurrence of substring.
console.log(fullName.indexOf("i") , "Index of a char")