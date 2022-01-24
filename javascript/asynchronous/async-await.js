// Example of using Async/await instead of a Promise.

function timer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("timer() complete."));
    }, 3000);
  });
}

async function main() {
  console.log("Will be executed before timer().");
  await timer();
  console.log("Will wait for timer() to finish, then execute.");
}

main();
