function findSmallestNumber(arr) {
  let mapper = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) mapper[arr[i]] = arr[i];
  }
  let mapperLength = Object.keys(mapper).length;
  if (mapperLength === 0) return 1;

  for (let i = 1; i <= mapperLength + 1; i++) {
    if (!mapper[i]) return i;
  }
  return -1;
}

findSmallestNumber([1, 3, 6, 4, 1, 2]); //op -> 5
findSmallestNumber([1, 2, 3]); //op -> 4
findSmallestNumber([−1, −3]); //op -> 1