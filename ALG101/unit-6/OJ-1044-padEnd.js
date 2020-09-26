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

function padEnd(str, targetLength, padString) {
  let result = str;
  const times = Math.floor((targetLength - str.length) / padString.length);
  const residueLength = (targetLength - str.length) % padString.length;
  for (let i = 1; i <= times; i++) {
    result += padString;
  }
  for (let i = 0; i < residueLength; i++) {
    result += padString[i];
  }
  return result;
}

function solve(lines) {
  const str = lines[0];
  const targetLength = Number(lines[1]);
  const padString = lines[2];
  console.log(padEnd(str, targetLength, padString));
}
// TODO 其他解法，例如，一直貼到超過再擷取所需長度，while 用法
