const Stack = require("../stack");
const Queue = require("../queue");
const SinglyLinkedList = require("../singly-linked-list");
const DoublyLinkedList = require("../doubly-linked-list");

// Function returns true if 2 arrays are equal.
function isEqualArrays(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (const index in array1) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
}

// Function returns true if test case passed.
function linkedListOperationsTestingFunction(linkedList, data, testCase) {
  let find1;
  let deleted;
  let find2;
  let passed = false;

  find1 = linkedList.findNode(data);
  passed = !!find1 === testCase.find1;

  deleted = linkedList.deleteNode(data);
  passed = deleted === testCase.delete;

  find2 = linkedList.findNode(data);
  passed = !!find2 === testCase.find2;

  return passed;
}

function dataStructuresTests() {
  const tests = 11;
  let passed = 0;

  const inputs = [1, 2, 3];
  const stack = new Stack();
  const queue = new Queue();

  for (const element of inputs) {
    stack.push(element);
    queue.enqueue(element);
  }

  // Assertions - Stack and Queue
  const testCase1_2 = { stack: [1, 2], queue: [2, 3] };
  const testCase3_4 = { stack: [1], queue: [3] };
  const testCase5_6 = { stack: [], queue: [] };

  stack.pop();
  queue.dequeue();
  if (isEqualArrays(stack.stack, testCase1_2.stack)) ++passed;
  if (isEqualArrays(queue.queue, testCase1_2.queue)) ++passed;

  stack.pop();
  queue.dequeue();
  if (isEqualArrays(stack.stack, testCase3_4.stack)) ++passed;
  if (isEqualArrays(queue.queue, testCase3_4.queue)) ++passed;

  stack.pop();
  queue.dequeue();
  if (isEqualArrays(stack.stack, testCase5_6.stack)) ++passed;
  if (isEqualArrays(queue.queue, testCase5_6.queue)) ++passed;

  // Assertions - Singly Linked List
  const testCase7 = {
    find1: false,
    deleted: false,
    find2: false,
    toArray: [1, 2, 3],
  };

  const testCase8 = {
    find1: true,
    deleted: true,
    find2: false,
    toArray: [1, 3],
  };

  const testCase9 = {
    find1: true,
    deleted: true,
    find2: false,
    toArray: [1],
  };

  const testCase10 = {
    find1: true,
    deleted: true,
    find2: false,
    toArray: [],
  };

  const testCase11 = {
    find1: false,
    deleted: false,
    find2: false,
    toArray: [],
  };

  const singlyLinkedList = new SinglyLinkedList();
  let nodeFound;
  for (const element of inputs) {
    singlyLinkedList.insert(element);
  }

  if (linkedListOperationsTestingFunction(singlyLinkedList, 4, testCase7))
    ++passed;
  if (linkedListOperationsTestingFunction(singlyLinkedList, 2, testCase8))
    ++passed;
  if (linkedListOperationsTestingFunction(singlyLinkedList, 3, testCase9))
    ++passed;
  if (linkedListOperationsTestingFunction(singlyLinkedList, 1, testCase10))
    ++passed;
  if (linkedListOperationsTestingFunction(singlyLinkedList, 5, testCase11))
    ++passed;

  console.log(`\n${passed} out of ${tests} tests passed.`);
}

dataStructuresTests();
