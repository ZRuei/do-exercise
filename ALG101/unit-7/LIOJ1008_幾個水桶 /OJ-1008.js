// 輸入為一個數字 M（1<=M<=2^31−1）
// 請輸出若是要取 M 個單位的水，最少需要帶幾個水桶

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

// function findMax(n) {
//   let arr = [];
//   for (let i = 0; i < Math.sqrt(n) + 1; i++) {
//     if (Math.pow(2, i) <= n) arr.push(i)
//   }
//   return arr.length-1
// }

function solve(lines) {
  const num = Number(lines[0]);
  const binary = num.toString(2);
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      count++;
    }
  }
  console.log(count);
}

// 2 4 8 16 32 64

// num: 38 / 6 / 4
// max: Math.pow(2, Math.floor(Math.sqrt(38))-1) 32 / 4
// num = num-max: 38-32=6 / 4-4=0
