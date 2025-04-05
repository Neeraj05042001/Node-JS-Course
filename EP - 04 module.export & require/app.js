// import  from "./xyz.js"
// import { calculateSum, x } from "./calculate/sum.js";


require("./xyz.js");
const { calculateSum, x } = require("./calculate/sum.js");
const {calculateMultiply} = require("./calculate/multiply")


console.log("Neeraj"); //Neeraj

var a = 10;
var b = 20;


console.log(a + b); //30
console.log(x);
calculateSum(a, b);
calculateMultiply(a,b)


