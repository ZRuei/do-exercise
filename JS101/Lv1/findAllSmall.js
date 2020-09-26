function findAllSmall(arr, num) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(findAllSmall([1, 2, 3], 10));
console.log(findAllSmall([1, 2, 3], 2));
console.log(findAllSmall([1, 3, 5, 4, 2], 4));
