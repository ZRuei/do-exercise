// 生命靈數
// 從生日開始，不斷把每一個位數相加，直到剩下一位為止
// 現在給你一個生日，請計算出生命靈數是多少

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

function sumNums(str) {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    num += Number(str[i]);
  }
  return num.toString();
}

function solve(lines) {
  // join('') 可以不加
  const birthday = lines[0].split(' ').join('');
  let magicNum = sumNums(birthday);
  while (Math.floor(Number(magicNum) / 10) !== 0) {
    magicNum = sumNums(magicNum);
  }
  console.log(Number(magicNum));
}

/*

function addDigits(n) {
  let sum = 0;
  while (n != 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

*/
