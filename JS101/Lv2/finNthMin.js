// 找出第 n 小的值 -> 排序

// 一個陣列中第 n 小的值，相當於將陣列由小至大排序，在 arr[n-1] 位置的數值

// 排序
// 1. 找出最小值
// 2. 把這個最小值存入新的陣列中
// 3. 把這個值從原本的陣列中刪除

function findMin(arr) {
  let min = arr[0];
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      minIndex = i;
    }
  }
  return minIndex;
}
function findNthMin(arr, nth) {
  const sortArr = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const minIndex = findMin(arr);
    sortArr.push(arr[minIndex]);
    arr.splice(minIndex, 1);
  }
  return sortArr[nth - 1];
}

console.log(findNthMin([1, 2, 3, 4, 5], 3));
console.log(findNthMin([1, 3, 5, 7, 9], 3));
console.log(findNthMin([1, 1, 1, 1, 1], 2));
// findNthMin([1, 2, 3, 4, 5], 1) 預期回傳值：1
// findNthMin([1, 3, 5, 7, 9], 3) 預期回傳值：5
// findNthMin([1, 1, 1, 1, 1], 2) 預期回傳值：1
