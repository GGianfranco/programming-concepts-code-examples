const SinglyLinkedList = require("./data-structures/singly-linked-list");

function linkedListOperationsTestingFunction(linkedList, data, testCase) {
  console.log("Arguments");
  console.log("Linked List:", linkedList);
  console.log("data:", data);
  console.log("testCase:", testCase);

  let nodeFound;
  let nodeDeleted;
  let passed = false;

  console.log("\n~~~~~~~~~~~1~~~~~~~~~~~~~~~");
  nodeFound = linkedList.findNode(data);
  passed = !!nodeFound === testCase.find1;
  console.log("nodeFound:", !!nodeFound);
  console.log("passed:", !!passed);
  console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^");

  console.log("\n~~~~~~~~~~~2~~~~~~~~~~~~~~~");
  nodeDeleted = linkedList.deleteNode(data);
  passed = nodeDeleted === testCase.delete;
  console.log("nodeDeleted:", !!nodeDeleted);
  console.log("passed:", !!passed);
  console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^");

  console.log("\n~~~~~~~~~~~3~~~~~~~~~~~~~~~");
  nodeFound = linkedList.findNode(data);
  passed = !!nodeFound === testCase.find2;
  console.log("nodeFound:", !!nodeFound);
  console.log("passed:", !!passed);
  console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^");

  return passed;
}
const testCase4 = {
  find1: false,
  delete: false,
  find2: false,
  toArray: [1, 2, 3],
};
const inputs = [1, 2, 3];

const singlyLinkedList = new SinglyLinkedList();
let nodeFound;
for (const element of inputs) {
  singlyLinkedList.insert(element);
}
console.log(
  linkedListOperationsTestingFunction(singlyLinkedList, 4, testCase4)
);
