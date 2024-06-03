// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
//     [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
//     [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
//     [] --> []
// You can assume that all values are integers. Do not mutate the input array
array = [1, 2, 3, 4, 5];

function invert(array) {
  return array.map((x) => x * -1);
}
console.log(invert(array));
