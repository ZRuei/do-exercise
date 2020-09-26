function swap(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      const d = str[i].charCodeAt() - 32;
      newStr += String.fromCharCode(d);
    } else if (str[i] >= 'A' && str[i] <= 'Z') {
      const d = str[i].charCodeAt() + 32;
      newStr += String.fromCharCode(d);
    }
  }
  return newStr;
}

console.log(swap('Peter'));
console.log(swap('AbCdE'));
