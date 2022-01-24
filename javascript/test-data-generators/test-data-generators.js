function generateRandomArrayIntegers(n) {
  let arr = [];
  while (arr.length < n) {
    let r = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

module.exports = { generateRandomArrayIntegers };
