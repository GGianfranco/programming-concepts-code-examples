// Solution #1 - Top down approach
// function fibonacci(n, a = 0, b = 1) {
//   process.stdout.write(`${a} `);
//   const c = a + b;
//   if (c >= n) {
//     process.stdout.write(`${b} `);
//     return;
//   }
//   fibonacci(n, b, c);
// }

// Solution #2 - Bottom up aproach
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
    // const a = fibonacci(num - 1);
    // const b = fibonacci(num - 2);
    // process.stdout.write(`${a} ${b} `);
    // return a + b;
  }
}

fibonacci(5);
