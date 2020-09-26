// 輸入為兩個用空格分隔的正整數 A 與 B（1 <= A,B <= 2＾31−1）
// 兩數相等輸出 Yes 否則輸出 No

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
  const temp = Lines[0].split(' ');
  const a = temp[0];
  const b = temp[1];
  a === b ? console.log('Yes') : console.log('No');
}
