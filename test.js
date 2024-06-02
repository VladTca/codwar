// Given a 0-indexed integer array nums of size n and two integers lower and upper, return the number of fair pairs.
//
//     A pair (i, j) is fair if:
//
// 0 <= i < j < n, and
// lower <= nums[i] + nums[j] <= upper
//
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  let count = 0;
  let res = [];
  for (let x = 0; x < nums.length; x++) {
    for (let y = x + 1; y < nums.length; y++) {
      if (
        nums[x] >= 0 &&
        nums[y] > nums[x] &&
        nums.length > nums[y] &&
        nums[nums[x]] + nums[nums[y]] <= upper &&
        nums[nums[x]] + nums[nums[y]] >= lower
      ) {
        res.push([nums[x], nums[y]]);
        count++;
      }
    }
  }
  return count;
};
