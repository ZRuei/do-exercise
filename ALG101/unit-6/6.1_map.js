// Array.map() 方法會建立一個新的陣列，
// 其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。

function double(n) {
  return n * 2;
}

function map(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = callback(arr[i]);
  }
  return result;
}

console.log(map([1, 3, 5, 6], double));
