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

function slice(str, beginIndex, endIndex) {
  let result = '';
  for (let i = beginIndex; i <= endIndex - 1; i++) {
    result += str[i];
  }
  return result;
}

function solve(lines) {
  const str = lines[0];
  const beginIndex = Number(lines[1]);
  const endIndex = Number(lines[2]);
  console.log(slice(str, beginIndex, endIndex));
}
