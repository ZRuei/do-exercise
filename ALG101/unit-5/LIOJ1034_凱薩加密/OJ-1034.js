// 凱薩加密是一個經典的加密演算法，
// 給定一個數字 N，把每一個英文字母都往右移 N 個，就是加密完的密文
// 第一行為一個數字 N，代表要往右移的位數，0<=N<=100
// 第二行為一個字串 S，1<=length(S)<=1000，代表原文，只會由小寫字母組成
// 請輸出把 S 的每個字母右移 N 位之後的結果

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

function CaesarCipher(str, n) {
  const shift = n % 26;
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) + shift > 122) {
      newStr += String.fromCharCode(str.charCodeAt(i) + shift - 26);
    } else {
      newStr += String.fromCharCode(str.charCodeAt(i) + shift);
    }
  }
  return newStr;
}

function solve(lines) {
  const n = Number(lines[0]);
  const str = lines[1];
  console.log(CaesarCipher(str, n));
}
