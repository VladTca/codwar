var relativeSortArray = function(arr1, arr2) {
  let rez=[];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {

      if (arr1[j] === arr2[i]) {
        rez.push(arr1[j]);
        arr1.splice(j, 1);
        j--;
      }
    }
  }

  rez = rez.concat(arr1);
  return rez;
};