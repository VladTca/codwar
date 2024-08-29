function vowelOne(s) {
  let count = "";
  for (let i = 0; i < s.length; i++) {
    let x = s[i].toLowerCase();
    if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
      count += 1;
    } else {
      count += 0;
    }
  }
  return count;
}
console.log(vowelOne("vowelOne"));
