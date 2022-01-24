// O(2^d) where d is the depth of the tree and 2 is the branching factor.
function preOrderTraversal(node, visited = []) {
  if (node) {
    visited.push(node);
    // visited.push(node.data);
    preOrderTraversal(node.left, visited);
    preOrderTraversal(node.right, visited);
  }
  return visited;
}

// O(2^d) where d is the depth of the tree and 2 is the branching factor.
function inOrderTraversal(node, visited = []) {
  if (node) {
    inOrderTraversal(node.left, visited);
    visited.push(node);
    // visited.push(node.data);
    inOrderTraversal(node.right, visited);
  }
  return visited;
}

// O(2^d) where d is the depth of the tree and 2 is the branching factor.
function postOrderTraversal(node, visited = []) {
  if (node) {
    postOrderTraversal(node.left, visited);
    postOrderTraversal(node.right, visited);
    visited.push(node);
    // visited.push(node.data);
  }
  return visited;
}

/**
 * Level order traversal brute forced and optimized approach
 *
 *
 */
// Brute force approach - O(n^2)
// function levelOrderTraversal(node, visited = []) {
//   function printCurrentLevel(root, level) {
//     if (root === null) return;
//     if (level === 1) visited.push(node.data);
//     if (level > 1) {
//       printCurrentLevel(root.left, level - 1);
//       printCurrentLevel(root.right, level - 1);
//     }
//   }

//   function height(node) {
//     if (!node) return -1;
//     return Math.max(height(node.left), height(node.right)) + 1;
//   }

//   const h = height(node);
//   for (let i = 1; i <= h + 1; i++) {
//     printCurrentLevel(node, i);
//   }
//   return visited;
// }

// Optimized approach - O(n) time but with O(n) space for our queue.
function levelOrderTraversal(node) {
  const queue = [node];
  const visited = [];

  while (queue.length > 0) {
    const vertex = queue.shift();
    const children = [vertex.left, vertex.right].filter((e) => !!e);

    for (const child of children) {
      queue.push(child);
    }

    // visited.push(vertex.data);
    visited.push(vertex);
  }

  return visited;
}

export {
  preOrderTraversal,
  inOrderTraversal,
  postOrderTraversal,
  levelOrderTraversal,
};
