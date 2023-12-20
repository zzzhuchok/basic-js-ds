const { NotImplementedError } = require("../extensions/index.js");
const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head;
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.head) {
      this.head = new ListNode(value);
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }
  }

  dequeue() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    let current = this.head
    this.head = current.next
    return current.value
  }
}

const queue = new Queue();
console.log('--- 1: ', queue.getUnderlyingList())
console.log('--- 1: ', queue.enqueue(3))
console.log('--- 1: ', queue.enqueue(4))
console.log('--- 1: ', queue.enqueue(5))
console.log('--- 2: ', queue.getUnderlyingList())

module.exports = {
  Queue,
};
