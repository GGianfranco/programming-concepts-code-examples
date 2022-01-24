const {
  breadthFirstSearch,
  depthFirstSearch,
} = require("../graph-searching-algorithms");
const Graph = require("../graph");

function graphTests() {
  // We need a generator from an actual tree or graph of nodes.
  const vertices = [1, 2, 3, 4, 5, 6, 7, 8];
  const edges = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [2, 6],
    [3, 7],
    [4, 8],
  ];
  // Create a graph using our vertices and edges data.
  // Graph class constructor will return an adjacency list (of type Map) graph representation.
  const graph = new Graph(vertices, edges);
  console.log(JSON.stringify(graph.adjacencyMatrix));

  // Search for Node with data of 7 using BFS and DFS.
  const nodeFoundBFS = breadthFirstSearch(graph.adjacencyList, 1, 7);
  const nodeFoundDFS = depthFirstSearch(graph.adjacencyList, 1, 7);
  console.log("Node found using BFS ->", nodeFoundBFS);
  console.log("Node found using DFS ->", nodeFoundDFS);
}

graphTests();
