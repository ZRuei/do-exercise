// 刪除特定字元
// 不要想成刪除，想成「略過」

let str = 'hello';
let deleted = 'l';
let res = '';

for (let i = 0; i < str.length; i++) {
  if (str[i] !== deleted) res += str[i];
}

console.log(res);
