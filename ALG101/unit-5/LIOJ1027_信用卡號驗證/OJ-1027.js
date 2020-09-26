/*
從左邊算起來的第一個數字為發卡行，Master Card 是 5 開頭，Visa 是 4，JCB 則是 3
而前 15 位數經過加權後加總，會得出一個數字，先把這數字除以 10 取餘數，
如果結果是 0，那檢查碼就是 0，否則就是用 10 減去之後的結果
權重的部分你可以很簡單這樣記：左邊數起奇數位是 2，偶數位是 1
若是在計算的過程中某一位數加權後的結果比 10 大，那請減去 9

舉例來說，5412-3456-7890-1232這個卡號的第一位是 5，代表這是 MasterCard 的卡
而奇數位加總為：5*2 + 1*2 + 3*2 + 5*2 + 7*2 + 9*2 + 1*2 + 3*2，
原本應該是：10 + 2 + 6 + 10 + 14 + 18 + 2 + 6

但前面有說過「如果比 10 大，請減去 9」，
所以就是 1(10-9) + 2 + 6 + 1(10-9) + 5(14-9) + 9(18-9) + 2 + 6 = 32
偶數位加總為：4 + 2 + 4 + 6 + 8 + 0 + 2 = 26，乘以 1 之後還是 26
把 32 跟 26 相加，得到 58，58 % 10 = 8，因此檢查碼就是 10-8 = 2
而卡號的第 16 碼也是 2，因此這個卡號是沒有問題的。

輸入為一個信用卡卡號，皆為 16 碼，每 4 碼以 - 做為分隔
若是信用卡不合法，請輸出 INVALID
否之則輸出信用卡的發卡行，只會有 VISA 與MASTER_CARD 這兩種結果
*/

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

function sumArr(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += Number(arr[i]);
  }
  return result;
}

function weightedArr(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] * 2 >= 10) {
      result += (arr[i] * 2 - 9);
    } else {
      result += (arr[i] * 2);
    }
  }
  return result;
}

function checkCode(num) {
  if (num % 10 === 0) return 0;
  return 10 - (num % 10);
}

function isValid(code, sum) {
  return code === checkCode(sum);
}

function solve(lines) {
  const str = lines[0];
  const code = Number(str[str.length - 1]);
  const issuer = Number(str[0]);
  const arr = str.split('-').join('');
  const arrOdd = [];
  const arrEven = [];
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    i % 2 === 0 ? arrOdd.push(arr[i]) : arrEven.push(arr[i]);
  }
  sum = weightedArr(arrOdd) + sumArr(arrEven);
  if (!isValid(code, sum)) {
    console.log('INVALID');
  } else {
    issuer === 5 ? console.log('MASTER_CARD') : console.log('VISA');
  }
}
