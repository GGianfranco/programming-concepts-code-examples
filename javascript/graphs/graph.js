// Our graph uses adjacency list representation.
class Graph {
  constructor(vertices, edges) {
    const max = Math.max(...vertices);
    this.adjacencyMatrix = new Array(max + 1)
      .fill()
      .map(() => new Array(max + 1).fill(0));
    this.adjacencyList = new Map();

    // Create the Graph with 2 graph representations
    vertices.forEach((vertex) => this.addVertex(vertex));
    edges.forEach((edge) => this.addEdge(...edge));
  }

  // Add vertex
  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  // Add edge, undirected
  addEdge(v1, v2) {
    this.adjacencyList.get(v1).push(v2);
    this.adjacencyList.get(v2).push(v1);

    this.adjacencyMatrix[v1][v2] = 1;
    this.adjacencyMatrix[v2][v1] = 1;
  }
}

module.exports = Graph;
