// The input will be an array of dictionaries.
//
//     Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).
//
// The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.
//
// Example
// Input:
//     List = [
//         {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
//         {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
//     ]
//
// Output:
//     'Vatsan took his dog for a spin'

const List = [
  { 4: "dog" },
  { 2: "took" },
  { 3: "his" },
  { "-2": "Vatsan" },
  { 5: "for" },
  { 6: "a" },
  { 12: "spin" },
];
const rrr = [
  { 3: "Jake." },
  { 5: "Chinatown" },
  { 1: "Forget" },
  { 4: "It is" },
  { 2: "it" },
];

function sentence(arrayOfObjects) {
  let arr = arrayOfObjects.sort((a, b) => Object.keys(a) - Object.keys(b));
  return arr.map((obj) => Object.values(obj).join(" ")).join(" ");
}
console.log(sentence(List));
console.log(sentence(rrr));
