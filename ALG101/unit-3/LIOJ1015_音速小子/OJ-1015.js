// 音速就是聲音傳播的速度，在空氣中約為每秒 340 公尺。
// 假設音速小子真的跑得跟音速一樣快，那只要 3 秒鐘就可以跑 340 * 3 = 1020 公尺。
// 若是給你一個秒數 t，並且假設音速小子跑的跟音速一樣快，你可以求出他能夠跑多遠嗎？
// 輸入：一個正整數 t（1 <= t <= 10^5）;
// 輸出：音速小子用 t 秒的時間可以跑多遠？
// 10 3400

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

function solve(Lines) {
  const temp = Number(Lines[0]);
  const distance = 340 * temp;
  console.log(distance);
}
