// 用空格分隔的三個資料：
// 數字 A（100000<=A<=10000）
// 運算符號（加法：+，減法：-，乘法：*，除法：\）
// 數字 B（0<=B<=10000）
// 請輸出運算後的結果

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

function calculate(a, b, op) {
  switch (op) {
    case '+':
      return Number(a) + Number(b);
    case '-':
      return Number(a) - Number(b);
    case '*':
      return Number(a) * Number(b);
    case '/':
      return Number(a) / Number(b);
    default:
  }
}

function solve(lines) {
  const tmp = lines[0].split(' ');
  const a = Number(tmp[0]);
  const op = tmp[1];
  const b = Number(tmp[2]);
  console.log(calculate(a, b, op));
}
