// 給你一個物品清單，上面有每樣物品的價值 Pi​，還有小偷最多能帶走的件數，請你幫忙求出小偷最多能偷到多少價值的東西。
// 第一行為一個數字 C，0 <= C <= 10000，代表小偷最多能夠帶走幾樣物品。
// 第二行為一個數字 N，1 <= N <= 10001，代表一共有幾項物品。
// 接下來 N 行每一行都包含一個數字 Pi，1 <= Pi ​<= 100000，代表第 i 項物品的價值。
// 請輸出小偷最多能偷到多少價值的東西？
// -> Pi 只是清單，非順序排列，需要排序

const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});

function findMax(arr) {
  let max = arr[0];
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

function sortArr(arr) {
  const result = [];
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    const maxIndex = findMax(arr);
    result.push(arr[maxIndex]);
    arr.splice(maxIndex, 1);
  }
  return result;
}

function getItems(arr, n) {
  let sum = 0;
  if (n === 0) return 0;
  if (n >= arr.length) {
    n = arr.length;
  }
  for (let i = 0; i < n; i++) {
    sum += Number(arr[i]);
    console.log(sum, arr[i]);
  }
  console.log(sum);
  return sum;
}

function solve(lines) {
  const n = Number(lines[0]);
  const length = Number(lines[1]);
  let newArr = [];
  for (let i = 2; i <= length + 1; i++) {
    newArr.push(Number(lines[i]));
  }
  newArr = sortArr(newArr);
  console.log(getItems(newArr, n));
}
