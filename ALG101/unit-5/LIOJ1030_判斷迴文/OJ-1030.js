// 一個字串 S，1<=length(S)<=100
// 若是迴文請輸出 True，否之則輸出 False
// TODO 用其他方式解題

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

function isPalindrome(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  if (str === reverseStr) return 'True';
  return 'False';
}

function solve(lines) {
  const str = lines[0];
  console.log(isPalindrome(str));
}
