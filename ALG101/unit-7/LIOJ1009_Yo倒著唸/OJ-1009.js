// 輸入會是一個字串 S，字串的長度是 L（1<=L<=100）
// 請你輸出字串 S 倒過來的結果

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

function reverse(str) {
  let s = '';
  for (let i = str.length - 1; i >= 0; i--) {
    s += str[i];
  }
  return s;
}

function solve(lines) {
  const str = lines[0];
  console.log(reverse(str));
}
