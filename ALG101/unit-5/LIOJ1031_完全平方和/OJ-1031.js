// 一個數字 N（1<=N<1000000）
// 請輸出 1~N 中完全平方數的總和

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

function sumPerfectSquare(n) {
  let num = 1;
  let sum = 0;
  while (num * num <= n) {
    sum += num * num;
    num++;
  }
  return sum;
}

function solve(lines) {
  const n = Number(lines[0]);
  console.log(sumPerfectSquare(n));
}
