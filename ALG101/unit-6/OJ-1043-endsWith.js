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

function endsWith(str, searchString) {
  const searchLength = searchString.length;
  const targetLength = str.length - searchLength;
  let targetStr = '';
  for (let i = targetLength; i < str.length; i++) {
    targetStr += str[i];
  }
  return targetStr === searchString;
}

function solve(lines) {
  const str = lines[0];
  const searchString = lines[1];
  endsWith(str, searchString) ? console.log('true') : console.log('false');
}

// TODO 用 while 從最後一個開始比對
