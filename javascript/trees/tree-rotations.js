// Single rotation notes

// Double rotation notes
// Tree subjected for right rotation, and the left child of the head has a higher right subtree. - left-right rotation.
// left half diamond - left-right rotation.

//     16
//    /
//   4
//    \
//     8

// Tree subjected for left rotation, and the right child of the head has a higher left subtree. - right-left rotation.
// right half diamond - right - left rotation.

//     4
//      \
//      16
//      /
//     8

function leftRotation(node) {
  console.log("leftRotation", node.data);
  const newParent = node.right;
  const grandParent = node.parent;
  const previousLeft = newParent.left;

  // Update grandparent's fields
  if (grandParent) {
    if (node.parentSide === "LEFT") {
      grandParent.left = newParent;
      newParent.parentSide = "LEFT";
    } else {
      grandParent.right = newParent;
      newParent.parentSide = "RIGHT";
    }
  }

  // Update new parent's fields
  newParent.left = node;
  newParent.parent = grandParent;
  newParent.parentSide = node.parentSide;

  // Update node's fields
  node.parent = newParent;
  node.parentSide = "LEFT";
  node.right = previousLeft;

  // Update previous left fields
  if (previousLeft) {
    previousLeft.parent = node;
    previousLeft.parentSide = "RIGHT";
  }

  return newParent;
}
function rightRotation(node) {
  const grandParent = node.parent;
  const newParent = node.left;
  const previousRight = newParent.right;

  if (grandParent) {
    if (node.parentSide === "LEFT") {
      grandParent.left = newParent;
      newParent.parentSide = "LEFT";
    } else {
      grandParent.right = newParent;
      newParent.parentSide = "RIGHT";
    }
  }

  newParent.right = node;
  newParent.parent = grandParent;
  newParent.parentSide = node.parentSide;

  node.parent = newParent;
  node.parentSide = "RIGHT";
  node.left = previousRight;

  if (previousRight) {
    previousRight.parent = node;
    previousRight.parentSide = "LEFT";
  }

  return newParent;
}

function leftRightRotation(node) {
  leftRotation(node.left);
  return rightRotation(node);
}

function rightLeftRotation(node) {
  rightRotation(node.right);
  return leftRotation(node);
}

module.exports = {
  leftRotation,
  rightRotation,
  leftRightRotation,
  rightLeftRotation,
};
