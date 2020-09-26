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

function filter(arr, target) {
  const filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) filterArr.push(arr[i]);
  }
  return filterArr;
}

function solve(lines) {
  const target = Number(lines[0]);
  const arr = [];
  for (let i = 2; i < lines.length; i++) {
    arr.push(Number(lines[i]));
  }
  const filteredArr = filter(arr, target);
  for (let i = 0; i < filteredArr.length; i++) {
    console.log(filteredArr[i]);
  }
}

// TODO callback 寫法
