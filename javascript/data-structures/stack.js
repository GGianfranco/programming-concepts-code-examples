class Stack {
  constructor() {
    this.stack = [];
  }

  push(e) {
    this.stack.push(e);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    if (this.stack.length < 1) return false;
    return this.stack[this.stack.length - 1];
  }
}

module.exports = Stack;
