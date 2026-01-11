// console.log("Apple1");

// setTimeout(() => {
//   console.log("Apple2");
// }, 2000);

// console.log("Apple3");

let a = 20;
let b = 0;

setTimeout(() => {
  b = 100;
  console.log(a + b);
}, 2000);

console.log(a + b);

fs = require("fs");

// fs.readFile("anilsidhu.txt", "utf-8", (err, data) => {
//   if (err) {
//     return false;
//   }
//   console.log(data);
// });

const data = fs.readFileSync("anilsidhu.txt", "utf-8");
console.log(data);

console.log("end scripts");
