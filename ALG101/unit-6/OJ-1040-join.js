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

function join(arr, separator) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    result += (arr[i] + separator);
  }
  return result + arr[arr.length - 1];
}

function solve(lines) {
  const separator = lines[0];
  const length = Number(lines[1]);
  const arr = [];
  for (let i = 2; i <= length + 1; i++) {
    arr.push(lines[i]);
  }
  console.log(join(arr, separator));
}
