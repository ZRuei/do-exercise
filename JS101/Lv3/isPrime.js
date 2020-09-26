// 請寫出一個 function isPrime，給定一個數字 n，回傳 n 是否為質數。
// （質數的定義：除了 1 以外，沒辦法被所有 < n 的正整數整除）
// isPrime(1) 正確回傳值：false
// isPrime(5) 正確回傳值：true
// isPrime(37) 正確回傳值：true

function isPrime(n) {
  if (n === 0 || n === 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(73));
