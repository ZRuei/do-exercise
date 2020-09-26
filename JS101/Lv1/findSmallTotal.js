function findSmallerTotal(arr, num) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(findSmallerTotal([1, 2, 3], 3));
console.log(findSmallerTotal([1, 2, 3], 1));
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999));
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0));
