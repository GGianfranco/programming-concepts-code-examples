function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let = j = i;
    while (arr[j] < arr[j - 1]) {
      const temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      --j;
    }
  }
  return arr;
}

module.exports = insertionSort;
