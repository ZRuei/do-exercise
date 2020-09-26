function sum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
}

// 內建函式 arr.reduce()

console.log(sum([1, 2, 3]));
console.log(sum([-1, 1, 2, -2, 3, -3]));
