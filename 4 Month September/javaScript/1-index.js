const myName = (name= "Sanket") => {
    try {
        console.log(`my name is ${name}`)
    } catch (error) {
        console.log(error)
    }
}
myName("Pournima");
myName("Mane");
myName();