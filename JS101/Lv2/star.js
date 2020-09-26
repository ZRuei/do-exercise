function stars(n) {
  let star = '';
  for (let i = 1; i <= n; i++) {
    star += '*';
    console.log(star);
  }
}

stars(7);
