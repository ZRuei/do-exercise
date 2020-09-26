// NN 乘法表
// 輸入為兩行，第一行為一個數字 N，第二行為一個數字 M，1<=N,M<=30
// 根據輸出範例的格式輸出 NM 乘法表

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

function table(n, m) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      console.log(`${i}*${j}=${i * j}`);
    }
  }
}

function solve(lines) {
  const n = Number(lines[0]);
  const m = Number(lines[1]);
  table(n, m);
}
