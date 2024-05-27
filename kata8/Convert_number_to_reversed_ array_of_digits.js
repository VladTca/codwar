// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]
let a = 35231;
function digitize(n) {
  let x = n
    .toString()
    .split("")
    .reverse()
    .map((x) => Number(x));
  return x;
}

console.log(digitize(a));
