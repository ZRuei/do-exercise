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

function reverse(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

function solve(lines) {
  const arr = [];
  for (let i = 1; i < lines.length; i++) {
    arr.push(Number(lines[i]));
  }
  const reverseArr = reverse(arr);
  for (let i = 0; i < reverseArr.length; i++) {
    console.log(reverseArr[i]);
  }
}
