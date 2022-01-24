class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(e) {
    this.queue.push(e);
  }
  dequeue() {
    return this.queue.shift();
  }
  peek() {
    if (this.queue.length < 1) return false;
    return this.queue[0];
  }
}

module.exports = Queue;
