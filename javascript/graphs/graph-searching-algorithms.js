function breadthFirstSearch(adjacencyList, start, data) {
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const vertex = queue.shift(); // mutates the queue
    const adjacentVertices = adjacencyList.get(vertex);

    for (const adjacentVertex of adjacentVertices) {
      if (adjacentVertex === data) {
        return adjacentVertex;
      }

      if (!visited.has(adjacentVertex)) {
        visited.add(adjacentVertex);
        queue.push(adjacentVertex);
      }
    }
  }

  return undefined;
}

function depthFirstSearch(adjacencyList, start, data, visited = new Set()) {
  visited.add(start);

  const adjacentVertices = adjacencyList.get(start);

  for (const adjacentVertex of adjacentVertices) {
    if (adjacentVertex === data) {
      return adjacentVertex; // Found it!
    }

    if (!visited.has(adjacentVertex)) {
      const found = depthFirstSearch(
        adjacencyList,
        adjacentVertex,
        data,
        visited
      );
      if (found) return found;
    }
  }
}

// Algorithm below is not applicable for a graph because nodes in a graph doesn't have fields of left and right child, these left and right child are only applicable in binary trees.

// function depthFirstSearch(node, data) {
//   if (!node) return;
//   if (node.data === data) return node.data;
//   let foundNode;
//   foundNode = depthFirstSearch(node.left, data);
//   if (foundNode) return foundNode;
//   foundNode = depthFirstSearch(node.right, data);
//   if (foundNode) return foundNode;
// }

module.exports = { breadthFirstSearch, depthFirstSearch };
