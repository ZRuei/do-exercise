// 判斷首字大寫
function isUpperCase(str) {
  const char = str[0];
  return char >= 'A' && char <= 'Z';
}

console.log(isUpperCase('abcd'));
console.log(isUpperCase('Abcd'));
console.log(isUpperCase('ABCD'));
console.log(isUpperCase('aBCD'));

// 回傳第一個大寫字母及他的 index
function position(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      return `${str[i]} ${i}`;
    }
  }
  return -1;
}

console.log(position('abcd'));
console.log(position('AbcD'));
console.log(position('abCD'));
