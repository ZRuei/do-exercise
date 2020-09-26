// n= 0 1 2 3 4 5 6  7  8  9
//    1 1 1 2 3 5 8 13 21 34

const fib = function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n >= 2) {
    return fib(n - 1) + fib(n - 2);
  }
};

console.log(fib(9));
