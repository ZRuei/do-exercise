function reverse(str) {
  let s = '';
  for (let i = str.length - 1; i >= 0; i--) {
    s += str[i];
  }
  return s;
}

console.log(reverse('abcd'));
console.log(reverse('12345aa'));
