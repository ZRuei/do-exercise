function table99() {
  let res = '';
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      res = i * j;
      console.log(`${i}*${j} = ${res}`);
    }
  }
}

table99();
