const DoublyNode = require("./doubly-node");

class DoublyLinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }

  insertFirst(data) {
    let newNode = new DoublyNode(data);
    let node = this.first;
    if (!node) {
      this.first = newNode;
      this.last = newNode;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }

  insertLast(data) {
    let newNode = new DoublyNode(data);
    let node = this.last;
    if (!node) {
      this.first = newNode;
      this.last = newNode;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }

  findNode(data) {}

  deleteNode(index) {}
}

module.exports = DoublyLinkedList;
