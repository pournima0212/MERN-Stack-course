const myFunction = () => {
    try {
        var x =10 // variable have function scop so variables can declare with var can access outside of block 
        var x =20   // variable redeclare
        x = 50   //reassign value
        console.log(x)

        if(true){
            let a =10      // let has block scope it is only accessible with in block {}
          //  let a= 25   //redeclare can nor allow
            a = 50        //reassign the value
        }

        const z = 80      // const also has block scop and work like let
       // const z = 30   // redeclare not allow
      //  z = 40        // reassign not allow


    } catch (error) {
        console.log(error);
    }
}
myFunction()