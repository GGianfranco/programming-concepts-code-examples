const countingSort = require("./counting-sort");

function radixSort(arr) {
  const k = Math.max(...arr).toString().length; // Get max number of digits of the elements in the array.
  let c = k - 1; // Decrements the value because arrays are zero-based.
  let digitKeys = new Map(); // Initializes a Map data structure to store our digit-by-digit reference. Digit of element will serve as key and the whole element itself will serve as the value.

  // Counting sort digit-by-digit basis. Last digit counting sort would yield the sorted array.
  while (c >= 0) {
    arr.map((e) => {
      // Iterate through each element in the unsorted array.
      let d = Number(e.toString().padStart(k, 0).charAt(c)); // Pad each number with leading zeros. { "d": [100] }
      const v = digitKeys.get(d) || []; // ❓ My question is why the value is an array instead od directly the element. 👈🏻 It is because for every values that have the same keys, we only need to save a signle key for them. Now next question is how do we visualize this algorithm. My answer to this is we can use CS Dojo's one whitebaord visualization provided.
      v.push(e);
      digitKeys.set(d, v);
    });

    // Use counting sort to sort the keys.
    const sortedKeys = countingSort([...digitKeys.keys()]);

    // Let us sort the original array based on our sorted keys. Let us overwrite the original array to not utilize another extra space of O(n).
    arr = [];
    sortedKeys.map((key) => {
      const values = digitKeys.get(key);
      arr.push(...values);
    });

    digitKeys.clear(); // Clear the keys from the previous digit to prepare for the next digit.
    --c;
  }

  return arr;
}

// const arr = [53, 89, 150, 36, 633, 233];
// const sorted = radixSort(arr);
// console.log("Unsorted:", arr);
// console.log("Sorted:", sorted);

module.exports = radixSort;
