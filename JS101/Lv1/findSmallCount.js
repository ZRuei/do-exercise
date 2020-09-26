function findSmallCount(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      count += 1;
    }
  }
  return count;
}
console.log(findSmallCount([1, 2, 3], 2));
console.log(findSmallCount([1, 2, 3, 4, 5], 0));
console.log(findSmallCount([1, 2, 3, 4], 100));
