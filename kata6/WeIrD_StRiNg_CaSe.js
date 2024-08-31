function toWeirdCase(str) {
  // Split the string into words
  return str
    .split(" ")
    .map((word) => {
      // Transform each word by mapping each character based on its index
      return word
        .split("")
        .map((char, index) => {
          // Even index: uppercase, Odd index: lowercase
          return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        })
        .join(""); // Join characters back into the word
    })
    .join(" "); // Join the words back into a single string
}
