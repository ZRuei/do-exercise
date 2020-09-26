// 輸入第一行會是一個數字 M，1 <= M <=50 代表一共有幾組比賽的結果
// 接著每一行會有三個用空白分隔的數字 A, B, K
// A 代表 A 選擇的數字，B 代表 B 選擇的數字，兩者皆保證為正整數
// 要特別注意的是 A 與 B 可能是很大的數字，但保證長度為 512 個位數以內
// K 只會有兩種情況：1 或是 -1，若是 1 代表數字大的獲勝，K 若是 -1 代表數字小的獲勝
// 3
// 1 2 1      B
// 1 2 -1     A
// 2 2 1      DRAW

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

function solve(lines) {
  const length = Number(lines[0]);
  for (let i = 1; i <= length; i++) {
    const tmp = lines[i].split(' ');
    const a = BigInt(tmp[0]);
    const b = BigInt(tmp[1]);
    const k = Number(tmp[2]);

    if (k === 1) {
      if (a === b) {
        console.log('DRAW');
      } else {
        a > b ? console.log('A') : console.log('B');
      }
    }
    if (k === -1) {
      if (a === b) {
        console.log('DRAW');
      } else {
        b > a ? console.log('A') : console.log('B');
      }
    }
  }
}
