// Build a function that returns an array of integers from n to 1 where n>0.
//
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
  let rez = [];
  for (let i = n; i > 0; i--) {
    rez.push(i);
  }
  return rez;
};
console.log(reverseSeq(5));
