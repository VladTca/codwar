let a = "abccccdd";

var longestPalindrome = function (s) {
  count = 0;
  res = [];
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== s.lastIndexOf(s[i])) count++;
  }
  if (s.length > count) count++;
  return count;
};

console.log(longestPalindrome(a));

//
// let a = "abccccdd";
//
// var longestPalindrome = function (s) {
//   let obj = {};
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (obj[s[i]] === undefined) {
//       obj[s[i]] = 1;
//     } else {
//       obj[s[i]]++;
//     }
//   }
//   for (let i in obj) {
//     if (obj[i] % 2 === 0) {
//       count += obj[i];
//     } else {
//       count += Math.floor(obj[i] / 2) * 2;
//     }
//   }
//   return count;
// };
//
// console.log(longestPalindrome(a));
