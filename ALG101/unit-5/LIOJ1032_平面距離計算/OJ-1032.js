// 第一行為一個正整數 T（1<=T<=100），代表一共有幾筆測試資料
// 每一筆測試資料會有 4 個整數，x1, y1, x2, y2，範圍均在 -100~100，彼此間以空行分開
// 針對每一筆測試資料，請輸出兩點的距離，並且「一律」四捨五入到小數點第二位
// 如果距離是 3，請輸出 3.00，距離是 2.7，請輸出 2.70

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

function distance(x1, y1, x2, y2) {
  const d = Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2));
  return d.toFixed(2);
}

function solve(lines) {
  for (let i = 1; i < lines.length; i += 4) {
    const x1 = Number(lines[i]);
    const y1 = Number(lines[i + 1]);
    const x2 = Number(lines[i + 2]);
    const y2 = Number(lines[i + 3]);
    console.log(distance(x1, y1, x2, y2));
  }
}
