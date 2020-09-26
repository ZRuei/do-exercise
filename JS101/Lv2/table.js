function table(n) {
  let res = '';
  for (let i = 1; i < 9; i++) {
    res = n * i;
    console.log(`${n}*${i} = ${res}`);
  }
}

table(6);
