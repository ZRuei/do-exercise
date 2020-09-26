function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      min = arr[i];
    }
  }
  console.log(min);
}

findMin([1, 2, 5, 6, 99, 4, 5]);
findMin([1, 6, 0, 33, 44, 88, -10]);
