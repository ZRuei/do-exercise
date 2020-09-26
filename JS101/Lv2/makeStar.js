// n=1   *

// n=2
// i=1 *
// i=2 \n + **
// n=3   * + \n + ** + \n + ***
function stars(n) {
  let res = '';
  for (let i = 1; i <= n; i++) {
    res += '*';
  }
  return res;
}

function makeStars(n) {
  let res = '*';
  const pattern = '\\n*';
  for (let i = 1; i <= n - 1; i++) {
    res += pattern + stars(i);
  }
  return res;
}

console.log(makeStars(1));
console.log(makeStars(3));
console.log(makeStars(5));
