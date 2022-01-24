import AvlTree from "./avl-tree.mjs";
import { inOrderTraversal, levelOrderTraversal } from "./tree-traversals.mjs";

function arrHasDuplicates(arr) {
  const numbers = arr.map(Number);
  const bucket = new Array(Math.max(...numbers)).fill(false);
  let hasDuplicates = false;

  numbers.map((number) => {
    // if number already in our bucket
    if (bucket[number - 1]) {
      hasDuplicates = true;
      return hasDuplicates;
    } else {
      // put number in our bucket
      bucket[number - 1] = true;
    }
  });

  return hasDuplicates;
}

function generateAvlTreeGrpahically() {
  const maxNumberOfNodes = 20;
  const treeContainer = document.querySelector("div.tree");
  treeContainer.innerHTML = "";
  const input = document
    .getElementsByTagName("input")[0]
    .value.toString()
    .trim()
    .replace(/  +/g, " ");

  if (!input) {
    const invalidInputAlert = document.createElement("h3");
    invalidInputAlert.appendChild(
      document.createTextNode("Please provide input...")
    );
    treeContainer.appendChild(invalidInputAlert);
    return;
  }
  // const numberAndSpacesOnly = new RegExp("^(d+s*)+$", "s"); // Why this regex doesn't work while the one below works fine even though they are just the same regex?
  const numberAndSpacesOnly = /^(\d+\s*)+$/s;

  if (!numberAndSpacesOnly.test(input)) {
    const invalidInputAlert = document.createElement("h3");
    invalidInputAlert.appendChild(
      document.createTextNode("Please provide numbers and spaces only...")
    );
    treeContainer.appendChild(invalidInputAlert);
    return;
  }

  const nodesData = input.split(" ");

  if (nodesData > maxNumberOfNodes) {
    const invalidInputAlert = document.createElement("h3");
    invalidInputAlert.appendChild(
      document.createTextNode("Sorry. Maximum number of nodes is 20...")
    );
    treeContainer.appendChild(invalidInputAlert);
    return;
  }

  if (arrHasDuplicates(nodesData)) {
    const invalidInputAlert = document.createElement("h3");
    invalidInputAlert.appendChild(
      document.createTextNode(
        "Duplicate nodes are not valid in an AVL Tree. Please provide nodes unique to each other..."
      )
    );
    treeContainer.appendChild(invalidInputAlert);
    return;
  }

  const avlTree = new AvlTree();
  nodesData.forEach((nodeData) => avlTree.insert(Number(nodeData)));

  const nodesInLevelOrder = levelOrderTraversal(avlTree.root);

  nodesInLevelOrder.forEach((node, index) => {
    const nodeIsRootOfTree = index === 0 ? true : false;
    const nodeHasSubtree = node.left || node.right;

    // Create node
    const newNodeContainer = document.createElement("li");
    newNodeContainer.setAttribute("id", `node${node.data}`);
    const newNode = document.createElement("div");
    newNodeContainer.appendChild(newNode);
    newNode.appendChild(document.createTextNode(`Node ${node.data}`));

    if (nodeHasSubtree) {
      // Create subtree and append to the new node.
      const newSubtree = document.createElement("ul");
      newSubtree.setAttribute("id", `subtreeOfNode${node.data}`);
      newNodeContainer.appendChild(newSubtree);
    }

    if (nodeIsRootOfTree) {
      // Create tree
      const newTree = document.createElement("ul");
      newTree.setAttribute("id", `rootOfTree`);
      const root = document.querySelector("div.tree");
      newTree.appendChild(newNodeContainer);
      root.appendChild(newTree);
    } else {
      const nodeParentSubtree = document.querySelector(
        `ul#subtreeOfNode${node.parent.data}`
      );
      nodeParentSubtree.appendChild(newNodeContainer);
    }
  });

  // Print to console nodesData in level order.
  const nodesInLevelOrderValues = nodesInLevelOrder
    .map((node) => node.data)
    .toString();
  const nodesInOrderValues = inOrderTraversal(avlTree.root)
    .map((node) => node.data)
    .toString();
  console.log("Nodes in level order:", nodesInLevelOrderValues);
  console.log("Nodes in order:", nodesInOrderValues);
}

document
  .getElementsByTagName("button")[0]
  .addEventListener("click", generateAvlTreeGrpahically);
