function strCount(obj) {
  let count = 0;

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      count++;
    } else if (Array.isArray(obj[key])) {
      for (let i = 0; i < obj[key].length; i++) {
        if (typeof obj[key][i] === "string") {
          count++;
        } else if (typeof obj[key][i] === "object" && obj[key][i] !== null) {
          count += strCount(obj[key][i]);
        }
      }
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      count += strCount(obj[key]);
    }
  }

  return count;
}
//
// function strCount(obj) {
//     let count = 0;
//
//     function countStrings(value) {
//         if (typeof value === "string") {
//             count++;
//         } else if (Array.isArray(value)) {
//             for (let i = 0; i < value.length; i++) {
//                 countStrings(value[i]);
//             }
//         } else if (typeof value === "object" && value !== null) {
//             for (let key in value) {
//                 countStrings(value[key]);
//             }
//         }
//     }
//
//     countStrings(obj);
//
//     return count;
// }

console.log(
  strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null,
    sixth: undefined,
    seventh: {},
  }),
);

// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:
//
//     strCount({
//         first: "1",
//         second: "2",
//         third: false,
//         fourth: ["anytime",2,3,4],
//         fifth:  null
//     })
// //returns 3
