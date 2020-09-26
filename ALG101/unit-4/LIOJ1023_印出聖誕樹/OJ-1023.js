// 印出聖誕樹
// n = 2
//  *
// ***
//  |

// n = 3
//   *
//  ***
// *****
//   |
//   |

// n = 4
//    *
//   ***
//  *****
// *******
//    |
//    |
//    |

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

function pattern(n, icon) {
  let p = '';
  for (let i = 1; i <= n; i++) {
    p += icon;
  }
  return p;
}

function topTree(n) {
  let res = '';
  for (let i = 1; i <= n; i++) {
    res = pattern(n - i, ' ') + pattern(2 * i - 1, '*');
    console.log(res);
  }
}

function printTree(n) {
  topTree(n);
  let trunk = '';
  for (let i = 1; i <= n - 1; i++) {
    trunk = pattern(n - 1, ' ') + pattern(1, '|');
    console.log(trunk);
  }
}

function solve(lines) {
  const tmp = Number(lines[0]);
  printTree(tmp);
}
