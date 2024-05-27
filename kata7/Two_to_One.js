// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
//     Examples:
let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  return s1
    .split("")
    .concat(s2.split(""))
    .sort()
    .filter((z, i, x) => x.indexOf(z) === i)
    .join("");
}
console.log(longest(a, b));
