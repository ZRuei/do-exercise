// 字串轉大寫
// ASCII A: 65 ~ Z: 90; a:97 ~ z: 122
// String.fromCharCode(97) -> a
// 'abc'.charCodeAt(0) -> 97

let str = 'Hello';
let res = '';

for (let i = 0; i < str.length; i++) {
  if (str[i] >= 'a' && str[i] <= 'z') {
    res += String.fromCharCode(
      str.charCodeAt(i) - 32
    );
  } else {
    res += str[i];
  }
}

console.log(res);
