// 請寫一個 function sort，接收一個陣列並且回傳由小到大排序後的陣列。（禁止使用內建函式 sort）
// 提示：如果你已經會找第 n 小的值了，試著把這個概念應用到這題上。
// sort([ 6, 8, 3, 2]) 預期回傳值：[2, 3, 6, 8]
// sort([ 1, 2, 7 ,5]) 預期回傳值：[1, 2, 5, 7]

// 1. 在 arr 中找出最小的值
// 2. 將這個最小的值推入 result 陣列中
// 3. 從原先的 arr 中刪除這個值
// 4. 重複 1.

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

function sort(arr) {
  const result = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const minIndex = findMin(arr);
    result.push(arr[minIndex]);
    arr.splice(minIndex, 1);
  }
  return result;
}

console.log(sort([6, 8, 3, 2]));
console.log(sort([1, 2, 7, 5]));
