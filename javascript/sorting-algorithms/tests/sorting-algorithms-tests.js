const testDataGenerator = require("../../test-data-generators/test-data-generators");
const bubbleSort = require("../bubble-sort");
const insertionSort = require("../insertion-sort");
const selectionSort = require("../selection-sort");
const quickSort = require("../quick-sort");
// const mergeSort = require("./merge-sort");
const countingSort = require("../counting-sort");
const radixSort = require("../radix-sort");

function compareArrays() {
  for (let i = 0; i < arguments.length - 1; i++) {
    const curr = arguments[i].toString();
    const front = arguments[i + 1].toString();
    if (curr != front) return false;
  }
  return true;
}

function main() {
  const n = 10;
  const arr = testDataGenerator.generateRandomArrayIntegers(n);
  console.log("Unsorted:", JSON.stringify(arr));

  const bs = bubbleSort(arr);
  const is = insertionSort(arr);
  const ss = selectionSort(arr);
  const qs = quickSort(arr);
  // const ms = mergeSort(arr);
  const cs = countingSort(arr);
  const rs = radixSort(arr);

  console.log("Sorted:", JSON.stringify(bs));

  if (compareArrays(bs, is, ss, qs, cs, rs)) {
    console.log("Congrats! All arrays are sorted.");
  }
}

main();
