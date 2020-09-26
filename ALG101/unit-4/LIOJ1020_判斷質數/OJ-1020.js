// 是否為質數
// 第一行為一個正整數 N，1<=N<=100，代表一共有幾個數字
// 接下來 N 行每一行都包含了一個正整數 P，1<=P<=100000

// 針對每一筆輸入，如果 P 是質數，輸出 Prime，否之則輸出 Composite
// （附註：Composite 是合數的意思，不過有一點要注意的是 1 不是質數也不是合數，但在這一題裡面一樣要輸出Composite）

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

function isPrime(n) {
  if (n === 1) return 'Composite';
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return 'Composite';
  }
  return 'Prime';
}

function solve(lines) {
  for (let i = 1; i < lines.length; i++) {
    const tmp = Number(lines[i]);
    console.log(isPrime(tmp));
  }
}
