const BinaryTreeNode = require("./binary-tree-node");

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Basic Binary Search Tree Operations
   *
   *
   */
  insert(data) {
    let newNode = new BinaryTreeNode(data);
    if (this.root === null) {
      this.root = newNode;
      return newNode;
    }

    let node = this.root;
    while (node) {
      if (data === node.data) return undefined;
      if (data < node.data) {
        if (!node.left) {
          node.left = newNode;
          node.left.parent = node;
          node.left.parentSide = "LEFT";
          return newNode;
        }
        node = node.left;
      } else {
        if (!node.right) {
          node.right = newNode;
          node.right.parent = node;
          node.right.parentSide = "RIGHT";

          return newNode;
        }
        node = node.right;
      }
    }
  }

  findNode(data) {
    let node = this.root;

    while (node) {
      if (data === node.data) return node;
      if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }

    return undefined;
  }

  remove(data) {
    function popInOrderSuccessor(node) {
      if (!node.left) {
        if (node.parent) {
          if (node.parentSide === "LEFT") node.parent.left = null;
          else node.parent.right = null;
        }
        node.parent = null;
        node.parentSide = null;
        node.left = null;
        node.right = null;
        return node;
      }
      return popInOrderSuccessor(node.left);
    }

    // Find the nodeToBeDeleted.
    let nodeToBeDeleted = this.findNode(data);
    const nodeToBeDeletedHasChild = !!(
      nodeToBeDeleted.left || nodeToBeDeleted.right
    );
    const nodeToBeDeletedHasTwoChildren = !!(
      nodeToBeDeleted.left && nodeToBeDeleted.right
    );
    const nodeToBeDeletedHasParent = !!nodeToBeDeleted.parent;

    // Case #1 - nodeToBeDeleted is not existing in our binary search tree.
    if (!nodeToBeDeleted) return false;

    // Case #2 - nodeToBeDeleted has no parent and no children. - Just remove the node.
    if (!nodeToBeDeletedHasParent && !nodeToBeDeletedHasChild) {
      // console.log("Case #2 - nodeToBeDeleted has no parent and no children.");
      if (nodeToBeDeleted == this.root) this.root = null;
      nodeToBeDeleted = null;
      return true;
    }

    // Case #3 - nodeToBeDeleted has one child only. - Remove the nodeToBeDeleted and make its child the new child of its parent.
    if (nodeToBeDeletedHasChild && !nodeToBeDeletedHasTwoChildren) {
      // console.log("Case #3 - nodeToBeDeleted has one child only.");
      if (nodeToBeDeletedHasParent) {
        if (nodeToBeDeleted.parentSide == "LEFT") {
          nodeToBeDeleted.parent.left =
            nodeToBeDeleted.left || nodeToBeDeleted.right;
          if (nodeToBeDeleted.left)
            nodeToBeDeleted.left.parent = nodeToBeDeleted.parent;
          else nodeToBeDeleted.right.parent = nodeToBeDeleted.parent;
        } else {
          nodeToBeDeleted.parent.right =
            nodeToBeDeleted.left || nodeToBeDeleted.right;
          if (nodeToBeDeleted.left)
            nodeToBeDeleted.left.parent = nodeToBeDeleted.parent;
          else nodeToBeDeleted.right.parent = nodeToBeDeleted.parent;
        }
      }

      if (nodeToBeDeleted == this.root)
        this.root = nodeToBeDeleted.left || nodeToBeDeleted.right;
      nodeToBeDeleted = null;
      return true;
    }

    // Case #4 - nodeToBeDeleted has two children. - Remove the nodeToBeDeleted and make its inorder successor the new child of its parent.
    if (nodeToBeDeletedHasTwoChildren) {
      // console.log("Case #4 - nodeToBeDeleted has two children.");
      // Find the inorder successor or the nodeWithMinimumValue in the right subtree of the nodeToBeDeleted.
      const inOrderSuccessor = popInOrderSuccessor(nodeToBeDeleted.right);

      if (nodeToBeDeletedHasParent) {
        if (nodeToBeDeleted.parentSide == "LEFT")
          nodeToBeDeleted.parent.left = inOrderSuccessor;
        else nodeToBeDeleted.parent.right = inOrderSuccessor;
      }

      if (nodeToBeDeleted.left) {
        nodeToBeDeleted.left.parent = inOrderSuccessor;
        inOrderSuccessor.left = nodeToBeDeleted.left;
      }
      if (nodeToBeDeleted.right) {
        nodeToBeDeleted.right.parent = inOrderSuccessor;
        inOrderSuccessor.right = nodeToBeDeleted.right;
      }

      if (nodeToBeDeleted == this.root) this.root = inOrderSuccessor;
      nodeToBeDeleted = null;
      return true;
    }

    // Case #5 - nodeToBeDeleted has no children (A leaf node). - Just remove the node.
    if (!nodeToBeDeletedHasChild) {
      if (nodeToBeDeletedHasParent) {
        // console.log("Case #5 - nodeToBeDeleted has no children (A leaf node).");
        if (nodeToBeDeleted.parentSide === "LEFT")
          nodeToBeDeleted.parent.left = null;
        else nodeToBeDeleted.parent.right = null;
      }
      if (nodeToBeDeleted == this.root) this.root = null;
      nodeToBeDeleted = null;
      return true;
    }

    // Other unknown cases.
    return false;
  }

  height(node = this.root) {
    if (!node) return -1;
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  // get balanceFactor() {
  //   return Math.max(this.height(node.left), this.height(node.right)) + 1;
  // }
}

module.exports = BinarySearchTree;
