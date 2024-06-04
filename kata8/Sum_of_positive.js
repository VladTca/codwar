// You get an array of numbers, return the sum of all of the positives ones.
//
//     Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

rrr = [-1, 2, 3, 4, -5];

function positiveSum(arr) {
  if (arr.length === 0) return 0;
  const totalpozitive = arr.reduce((sum, item) => {
    if (item > 0) sum = sum + item;
    return sum;
  }, 0);
  if (totalpozitive <= 0) return 0;
  return totalpozitive;
}

console.log(positiveSum(rrr));
