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

function getIndex(str) {
  let headIndex = 0;
  let tailIndex = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      headIndex = i;
      break;
    }
  }
  for (let j = str.length - 1; j > 0; j--) {
    if (str[j] !== ' ') {
      tailIndex = j;
      break;
    }
  }
  return [headIndex, tailIndex];
}

function trim(str) {
  let result = '';
  const start = getIndex(str)[0];
  const end = getIndex(str)[1];
  for (let i = start; i <= end; i++) {
    result += str[i];
  }
  return result;
}

function solve(lines) {
  const str = lines[0];
  console.log(trim(str));
}

// TODO 加 flag 的寫法
