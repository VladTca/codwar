function sameCase(a, b) {
  if (
    typeof a !== "string" ||
    typeof b !== "string" ||
    !/[a-zA-Z]/.test(a) ||
    !/[a-zA-Z]/.test(b)
  ) {
    return -1;
  } else if (a === b) {
    return 1;
  } else return 0;
}
