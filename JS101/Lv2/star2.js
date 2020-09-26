function stars(n) {
  let res = '';
  for (let i = 1; i <= n; i++) {
    res += '*';
  }
  return res;
}

function star2(n) {
  for (let i = 1; i <= n; i++) {
    console.log(stars(i));
  }
  for (let j = n - 1; j > 0; j--) {
    console.log(stars(j));
  }
}

// star2(3);
// star2(5);
star2(7);
