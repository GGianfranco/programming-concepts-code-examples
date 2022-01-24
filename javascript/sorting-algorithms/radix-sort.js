const countingSort = require("./counting-sort");

function radixSort(arr) {
  const k = Math.max(...arr).toString().length;
  let c = k - 1;
  let digitKeys = new Map();

  while (c >= 0) {
    // Use the current digit as key for each element.
    arr.map((e) => {
      let d = Number(e.toString().padStart(k, 0).charAt(c));
      const v = digitKeys.get(d) || [];
      v.push(e);
      digitKeys.set(d, v);
    });

    // Use counting sort to sort the keys.
    const sortedKeys = countingSort([...digitKeys.keys()]);

    // Sort the elements using the sorted keys as reference.
    arr = [];
    sortedKeys.map((key) => {
      const values = digitKeys.get(key);
      arr.push(...values);
    });

    digitKeys.clear();
    --c;
  }

  return arr;
}

// const arr = [53, 89, 150, 36, 633, 233];
// const sorted = radixSort(arr);
// console.log("Unsorted:", arr);
// console.log("Sorted:", sorted);

module.exports = radixSort;
