// 水仙花數
// 一個 n 位數的數字，每一個數字的 n 次方加總等於自身
// 數字 0~9 也都是水仙花數，因為一位數 n 的 1 次方一定會等於自己
// 輸入為兩個用空白分割的正整數 N 與 M，1<=N<=M<=10^6
// 由小到大輸出從 N 到 M（包含 N 與 M）有哪些水仙花數，每個數字以空行分隔

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

function narcissisticNumber(n1, n2) {
  for (let i = n1; i <= n2; i++) {
    const num = `${i}`;
    // const num = i.toString().split('');
    let nn = 0;
    for (let j = 0; j < num.length; j++) {
      // nn += Math.pow(Number(num[j]), num.length);
      nn += Number(num[j]) ** num.length;
    }
    if (i === nn) console.log(i);
  }
}

function solve(lines) {
  const tmp = lines[0].split(' ');
  const n1 = Number(tmp[0]);
  const n2 = Number(tmp[1]);
  narcissisticNumber(n1, n2);
}
