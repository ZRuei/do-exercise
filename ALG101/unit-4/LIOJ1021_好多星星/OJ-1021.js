// 印出星星

var readline = require('readline');

var lines = [];
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line);
});

rl.on('close', function() {
  solve(lines);
})

function stars(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    result += '*';
    return result;
  }
}

function solve(lines) {
  let tmp = Number(lines[0]);
  console.log(stars(tmp));
}