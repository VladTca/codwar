function findMissing(arr1, arr2) {
  const sum1 = arr1.reduce((acc, num) => acc + num, 0);
  const sum2 = arr2.reduce((acc, num) => acc + num, 0);

  return sum1 - sum2;
}
