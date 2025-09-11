//Optional Chaining - obj?.property?.subProp

const mainObject = {
  name: "Pournima",
  subObject: {
    std: 24,
    newObject: {
      city: "Karad",
    },
  },
};

console.log(mainObject?.subObject?.aaa , "===")

//console.log(mainObject && mainObject?.subObject?.aaa , "===")