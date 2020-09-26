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

function toLowerCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      const toLower = str.charCodeAt(i) + 32;
      result += String.fromCharCode(toLower);
    } else {
      result += str[i];
    }
  }
  return result;
}

function solve(lines) {
  const str = lines[0];
  console.log(toLowerCase(str));
}
