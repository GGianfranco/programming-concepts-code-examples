const AvlTree = require("../avl-tree");

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function generateArrayOfUniqueRandomNumbers(length, max) {
  if (length > max)
    throw "Parameter length should be less than or equal to the maximum number.";
  const bucket = new Array(max).fill(false);
  const arr = [];
  while (arr.length != length) {
    let randomNumber = getRandomNumber(max);
    while (bucket[randomNumber]) {
      randomNumber = getRandomNumber(max);
    }
    bucket[randomNumber] = true;
    arr.push(randomNumber);
  }
  return arr;
}

function checkNodeBalanceInOrderTraversal(node, visited = []) {
  if (node) {
    checkNodeBalanceInOrderTraversal(node.left, visited);
    if (Math.abs(node.balanceFactor) > 1)
      throw `Tree at Node ${node.data} not balanced.`;
    visited.push(node);
    checkNodeBalanceInOrderTraversal(node.right, visited);
  }
  return visited;
}

function avlTreeTest() {
  const tests = 2;
  let passed = 0;

  const dataToBeInserted = generateArrayOfUniqueRandomNumbers(20, 20);
  const expectedInOrderTraversalOutput = [...dataToBeInserted].sort(
    (a, b) => a - b
  );
  const avlTree = new AvlTree();
  dataToBeInserted.map((data) => avlTree.insert(data));

  // Log inputs
  console.log("Data to be inserted:", JSON.stringify(dataToBeInserted), "\n");
  console.log(
    "Expected in order traversal output:",
    JSON.stringify(expectedInOrderTraversalOutput),
    "\n"
  );

  // checkNodeBalanceInOrderTraversal() verifies each node in our AVL tree is balanced using in order traversal.
  // Throws exception if found unbalanced node. Returns array of nodes in order traversal if all nodes are balanced.
  const nodesInOrderTraversal = checkNodeBalanceInOrderTraversal(avlTree.root);
  ++passed;
  console.log("#1 test passed - AVL Tree is balanced.");

  //   In order traversal test.
  nodesInOrderTraversal.forEach((node, index) => {
    if (node.data != expectedInOrderTraversalOutput[index])
      throw `#2 test failed - AVL Tree is not balanced at Node ${node.data}`;
  });
  ++passed;
  console.log(
    "#2 test passed - Expected in order traversal output the same with the in order traversal of our tree."
  );

  console.log(`\n${passed} out of ${tests} tests passed.`);
}

avlTreeTest();
