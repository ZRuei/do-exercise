## 解題紀錄

學習程式的路上，不管是為了確認自己的基礎穩不穩固或是求職所需，似乎都會遇到刷題這件事，其中幾個較知名的網站像是 [LeetCode](https://leetcode.com/)、[CodeWars](https://www.codewars.com/)、[HackerRank](https://www.hackerrank.com/) 等。新手如我，也曾經打開 CodeWars 就開始狂寫，可能一整天都在同一道題目打滾，搞半天才發現自己搞錯題意，根本在錯誤的方向掙扎。

[[ALG101] 先別急著寫 leetcode](https://github.com/Lidemy/ALG101-too-weak-to-leetcode) 是 Huli 開的佛心課程，內容主要涵蓋：

1. 用 pseudo code 來建立程式思維
2. 以最基礎的變數、判斷式、迴圈、函式加深程式邏輯
3. 解析 [LIOJ](https://oj.lidemy.com/) 經典題目，循序動手練習
4. 實作 JavaScript 的內建方法
5. 基礎資料結構與演算法

上完課以後收穫很多，也因此初嚐到解題的樂趣，很推薦不確定自己基礎穩不穩，想要開始刷題的人上這門課，因為大多是以最基礎的迴圈、判斷式、函式來應答，反而對於寫程式這件事有更深的體驗，未來要刷題的時候也會比較有方向，知道要從哪裡開始刷，以及不被那些看起來很帥氣的（？）解法所迷惑。

這邊用來存放我在 ALG101 及早前上過的 JS101 解答，ALG101 檔案資料夾依課程單元分類，由於 LIOJ 使用標準輸入來測試程式，所以檔案會分為讀取測資與解題兩個部分（如以下範例），`input.txt` 為測試資料，輸入指令 `cat input.txt | node example.js` 來讀入測資，並檢驗是否正確。而 JS101 則純粹做個紀錄，資料夾依難度分類。

**上半部用來處理讀取測資：**

```js
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});
```

**下半部的 solve 函式則為解題內容：**

```js 
function solve(Lines) {
  const temp = Number(Lines[0]);
  const distance = 340 * temp;
  console.log(distance);
}
```


