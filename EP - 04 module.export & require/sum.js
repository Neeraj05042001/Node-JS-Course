export function calculateSum(a, b) {
  let sum = a + b;  //must write let, const or var in case of mjs otherwise it will throw an error as it runs in strict mode.
  console.log(sum);
}
export var x = 100
// module.exports = {
//  calculateSum, x
// }