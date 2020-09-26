// 請寫一個 function tree，接收一個數字 n，按照規律列印出大小為 n 的聖誕樹
// （這邊編輯器有點問題空白顯示不出來，用 _ 代表空白）
// tree(1) 預期輸出：
// *
// tree(2) 預期輸出：
// _*         (2-1)_ + (1+1-1)*
// ***        (2-2)_ + (2+2-1)*
// _*         (2-1)_* x 2
// _*
// tree(3) 預期輸出：
// __*        (3-1)_ + (1+1-1)*  -> i=1~n (n-i)_ + (2i-1)*
// _***       (3-2)_ + (2+2-1)*
// *****      (3-3)_ + (3+3-1)*
// __*                           ->        (n-1)_* x n
// __*
// __*

// tree(5) 預期輸出：
// ____*
// ___***
// __*****
// _*******
// *********
// ____*
// ____*
// ____*
// ____*
// ____*

function pattern(n, icon) {
  let res = '';
  for (let i = 1; i <= n; i++) {
    res += icon;
  }
  return res;
}

function treeTop(n) {
  for (let i = 1; i <= n; i++) {
    console.log(pattern(n - i, ' ') + pattern(2 * i - 1, '*'));
  }
}

function tree(n) {
  treeTop(n);
  for (let i = 1; i <= n; i++) {
    console.log(pattern(n - 1, ' ') + pattern(1, '*'));
  }
}

tree(6);
