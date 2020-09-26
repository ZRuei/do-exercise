let arr = [4, 5, 6, 2, 8];
let max = -Infinity;
let max2 = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max2 = max;
    max = arr[i];
  } else if (arr[i] > max2) {
    max2 = arr[i];
  }
}

console.log(max2);
