import BinarySearchTree from "./binary-search-tree.mjs";

import {
  leftRotation,
  rightRotation,
  leftRightRotation,
  rightLeftRotation,
} from "./tree-rotations.mjs";

function balance(node) {
  const balanceFactorValue = node.balanceFactor;
  // console.log(node.data, balanceFactorValue);

  let balanced = false;
  let subjectForLeftRotation = false;
  let subjectForRightRotation = false;
  let subjectForRightLeftRotation = false;
  let subjectForLeftRightRotation = false;

  // Figure out the applicable rotation to be applied.
  if (Math.abs(balanceFactorValue) < 2) {
    balanced = true;
  } else if (balanceFactorValue < -1) {
    subjectForLeftRotation = true;
    if (node.right.balanceFactor > 0) {
      subjectForRightLeftRotation = true;
    }
  } else if (balanceFactorValue > 1) {
    subjectForRightRotation = true;
    if (node.left.balanceFactor < 0) {
      subjectForLeftRightRotation = true;
    }
  }

  // Execute the applicable rotation.
  let newRoot;

  if (subjectForLeftRotation) {
    console.log(`Node ${node.data} is subjectForLeftRotation.`);
    if (subjectForRightLeftRotation) {
      console.log(`Node ${node.data} is subjectForRightLeftRotation.`);
      newRoot = rightLeftRotation(node);
      return newRoot;
    }

    newRoot = leftRotation(node);
    return newRoot;
  } else if (subjectForRightRotation) {
    console.log(`Node ${node.data} is subjectForRightRotation.`);
    if (subjectForLeftRightRotation) {
      console.log(`Node ${node.data} is subjectForLeftRightRotation.`);
      newRoot = leftRightRotation(node);
      return newRoot;
    }

    newRoot = rightRotation(node);
    return newRoot;
  } else if (balanced) {
    console.log(`Node ${node.data} is balanced.`);
    return node;
  }
  console.log(`Node ${node.data} is undefined.`);
  return undefined;
}

function balanceUpstream(node) {
  let currentNode = node;
  let newParent;
  console.log(`Insert Node ${node.data}.`);
  while (currentNode) {
    newParent = balance(currentNode);
    currentNode = currentNode.parent;
  }
  console.log("");
  return newParent;
}

class AvlTree extends BinarySearchTree {
  insert(data) {
    const node = super.insert(data);
    this.root = balanceUpstream(node);
    return node;
  }

  remove(data) {
    const node = super.findNode(data);
    if (node) {
      const removed = super.remove(data);
      this.root = balanceUpstream(node.parent);
      return removed;
    }
    return false;
  }
}

export default AvlTree;
