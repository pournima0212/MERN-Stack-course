//Destructuring - Object

const userInfo = {
  a: "Pournima",
  std: 14,
};
const { a: fullName, std } = userInfo;
console.log(fullName, "Mane");

//Destructuring - Array

const arr = [15, 19, 11, 26];
const [aaaa, rrrr, bbbb] = arr;
console.log(aaaa, rrrr, "====");