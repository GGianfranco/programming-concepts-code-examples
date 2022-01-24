const SinglyNode = require("./singly-node");

class SinglyLinkedList {
  constructor() {
    this.first = null;
  }

  insert(data) {
    let newNode = new SinglyNode(data);
    if (!this.first) {
      this.first = newNode;
      return true;
    }

    let node = this.first;
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
    return true;
  }

  findNode(data) {
    if (!this.first) return undefined;
    let node = this.first;
    while (node) {
      if (node.data === data) return node;
      node = node.next;
    }
    return undefined;
  }

  deleteNode(data) {
    if (!this.first) return false;
    if (this.first.data === data) {
      this.first = null;
      return true;
    }
    let node = this.first;
    while (node.next) {
      if (node.next.data === data) {
        node.next = node.next.next;
        return true;
      }
      node = node.next;
    }
    return false;
  }

  toArray() {
    let node = this.first;
    let array = [];
    while (node) {
      array.push(node.data);
      node = node.next;
    }
    return array;
  }
}

module.exports = SinglyLinkedList;
