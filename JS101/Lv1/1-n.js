// 印出 1-9

for (let i = 0; i < 10; i++) {
  console.log(i);
}
let i = 1;
while (i < 10) {
  i++;
  console.log(i);
}

// 印出 1-n
function print(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

print(9);

// 印出 n 個星星
function star(n) {
  let r = '';
  for (let i = 1; i <= n; i++) {
    r += '*';
  }
  return r;
}

console.log(star(2));
