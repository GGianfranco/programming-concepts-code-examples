const binarySearch = require("../binary-search");

function searchingAlgorithmsTests() {
  // Create a sorted array.
  const max = 100;
  const arr = new Array(max).fill(0).map((val, i) => Number(i));
  const r = Math.floor(Math.random() * arr.length);
  const target = arr[r];

  // Returns the index of the target. Returns -1 if non-existing.
  console.log("Should return index:", r);
  const indexofTarget = binarySearch(arr, target);
  console.log("Returned index:", indexofTarget);
}

searchingAlgorithmsTests();
