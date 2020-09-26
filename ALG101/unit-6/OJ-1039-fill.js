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

function fill(arr, value) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(value);
  }
  return result;
}

function solve(lines) {
  const target = Number(lines[0]);
  const arr = [];
  for (let i = 2; i < lines.length; i++) {
    arr.push(Number(lines[i]));
  }
  const fillArr = fill(arr, target);
  for (let i = 0; i < fillArr.length; i++) {
    console.log(fillArr[i]);
  }
}
