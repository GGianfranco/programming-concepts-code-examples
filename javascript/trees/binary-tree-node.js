class BinaryTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.parentSide = null;
  }

  height(node) {
    if (!node) return -1;
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  get balanceFactor() {
    return this.height(this.left) - this.height(this.right);
  }
}

module.exports = BinaryTreeNode;
