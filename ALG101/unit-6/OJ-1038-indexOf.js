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

function indexOf(arr, searchElement) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) return i;
  }
  return -1;
}

function solve(lines) {
  const target = Number(lines[0]);
  const arr = [];
  for (let i = 2; i < lines.length; i++) {
    arr.push(Number(lines[i]));
  }
  console.log(indexOf(arr, target));
}
