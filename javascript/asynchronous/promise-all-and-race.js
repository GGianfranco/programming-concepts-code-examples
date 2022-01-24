// Example of using Promise.all() and Promise.race().
function main() {
  const pTwoSec = new Promise((resolve, reject) => {
    resolve("pTwoSec");
    setTimeout(() => {}, 2000);
  });

  const pThreeSec = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("pThreeSec");
    }, 3000);
  });

  const pFiveSec = new Promise((resolve, reject) => {
    resolve("pFiveSec");
    setTimeout(() => {}, 5000);
  });

  // Waits for all promises to finish and returns an array containing all of them in order.
  Promise.all([pTwoSec, pThreeSec, pFiveSec]).then((message) =>
    console.log("Promise.all", message)
  );

  // Returns only the promise who finished first. Meaning only a single Promise is returned.
  // pTwoSec is fastest.
  Promise.race([pThreeSec, pTwoSec, pFiveSec]).then((message) =>
    console.log("Promise.race", message)
  );
}

main();
