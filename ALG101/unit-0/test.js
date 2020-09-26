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

function solve(lines) {
  for (let i = 0; i < lines.length; i++) {
    const temp = lines[i].split(' ');
    const a = Number(temp[0]);
    const b = Number(temp[1]);

    if (a === 0 && b === 0) return;
    a > b ? console.log(a) : console.log(b);
  }
}
