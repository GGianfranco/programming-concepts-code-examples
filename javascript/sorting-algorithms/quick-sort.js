function quickSort(arr) {
  const l = 0;
  const r = arr.length - 1;
  qs(arr, l, r);
  return arr;
}

function qs(arr, l, r) {
  if (l >= r) return;
  const p = partition(arr, l, r); // Returns the index of the sorted middle element.
  qs(arr, l, p - 1);
  qs(arr, p + 1, r);
}

function partition(arr, l, r) {
  const pivot = { index: r, value: arr[r] };
  let i = l - 1;
  for (let j = l; j < r; j++) {
    if (arr[j] < pivot.value) {
      ++i;
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  ++i;
  arr[pivot.index] = arr[i];
  arr[i] = pivot.value;
  return i;
}

module.exports = quickSort;
