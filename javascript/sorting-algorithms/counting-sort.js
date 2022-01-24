function countingSort(arr) {
  const sorted = new Array(arr.length).fill(null); // O(n)
  const freq = new Array(Math.max(...arr) + 1).fill(0); // O(k) - where k is the maximum value of an element in the unsorted array.

  // Count occurence of each element and store these occurences in our freq array.
  arr.map((e) => {
    ++freq[e];
  });

  // Modify our freq array by performing addition to the right accumulatively.
  freq.reduce((acc, val, i, arr) => {
    freq[i] = val + acc;
    return freq[i];
  });

  // Perform a single shift to the right. In JS, you can do it this way.
  freq.pop();
  freq.unshift(0);

  // Populate the sorted array using our modfied freq array as reference.
  for (let i = 0; i < arr.length; i++) {
    const unsortedElement = arr[i];
    const sortedPosition = freq[unsortedElement];
    sorted[sortedPosition] = unsortedElement;
    ++freq[unsortedElement];
  }

  return sorted;
}
// const unsorted = [3, 5, 6, 41, 2, 3, 4];
// const sorted = countingSort(unsorted);
// console.log("Unsorted:", unsorted);
// console.log("Sorted:", sorted);

module.exports = countingSort;
