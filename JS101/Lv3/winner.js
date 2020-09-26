// 請寫出一個 function winner，接收一個代表圈圈叉叉的陣列
// 並回傳贏的是 O 還是 X，如果平手或還沒下完，請回傳 draw。

// winner([
// ['O', 'O', 'X'],
// ['O', 'X', 'X'],
// ['O', 'X', 'O']
// ]) 預期回傳值：O

// winner([
// ['O', 'O', 'X'],
// ['O', 'X', 'X'],
// ['X', 'X', 'O']
// ]) 預期回傳值：X

// winner([
// ['O', 'O', 'X'],
// ['O', 'O', 'X'],
// ['X', 'X', '']
// ]) 預期回傳值：draw

function winner(arr) {
  for (let i = 0; i < 3; i++) {
    // 橫排
    if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
      return arr[i][0];
    }
    // 直排
    if (arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]) {
      return arr[0][i];
    }
    // 交叉
    if (arr[0][0] === arr[1][1] && arr[2][2]) return arr[0][0];
    if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) return arr[0][2];
  }
  return 'draw';
}
// arr[0][0], arr[0][1], arr[0][2] arr[0][i]
// arr[1][0], arr[1][1], arr[1][2] arr[1][i]
// arr[2][0], arr[2][1], arr[2][2] arr[2][i]

// arr[0][0], arr[1][0], arr[2][0] arr[i][0]
// arr[0][1], arr[1][1], arr[2][1] arr[i][1]
// arr[0][2], arr[1][2], arr[2][2] arr[i][2]

// arr[0][0], arr[1][1], arr[2][2] arr[i][i]
// arr[0][2], arr[1][1], arr[2][0]

console.log(winner([
  ['O', 'O', 'X'],
  ['O', 'O', 'X'],
  ['X', 'X', '']
]));
