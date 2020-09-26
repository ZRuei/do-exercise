// 印出金字塔

// n=1
// *

// n=3
// __*     _ 3-1   * 1
// _***    _ 3-2   * 3
// *****   _ 3-3   * 5
//           n-i     2i-1
// n=5
// ____*         _ 5-1 * 1
// ___***        _ 5-2 * 3
// __*****       _ 5-3 * 5
// _*******      _ 5-4 * 7
// *********     _ 5-5 * 9


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
});

function pattern(n, icon) {
  let p = ''
  for (let i = 1; i <= n; i++) {
    p += icon;
  }
  return p;
}

function printPyramid(n) {
  let result = '';
  for (let i = 1; i<= n; i++) {
    result = pattern(n-i, ' ') + pattern(2*i-1, '*');
    console.log(result);
  }
}

function solve(lines) {
  let tmp = Number(lines[0]);
  printPyramid(tmp); 
}