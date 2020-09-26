// 等比數列
// 輸入的第一行為一個數字 N，2<=N<=100，代表數列裡總共有幾個數字
// 接下來第二行為數列中的數字 Ai，−10000<=Ai<=10000，彼此用空格分隔
// 若是輸入的數列為等比數列，請輸出 Yes，反之輸出 No

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

function isGeometric(arr) {
  const r = arr[1] / arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 0) return 'No';
    if (arr[i] / arr[i - 1] !== r) return 'No';
  }
  return 'Yes';
}

function solve(lines) {
  const arr = lines[1].split(' ');
  console.log(isGeometric(arr));
}
