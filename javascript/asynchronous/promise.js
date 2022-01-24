// Example of using Promise.

function timer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("timer() complete."));
    }, 3000);
  });
}

function main() {
  console.log("Will be executed before timer().");
  timer();
  console.log("Will be executed while timer() is running.");
}

main();
