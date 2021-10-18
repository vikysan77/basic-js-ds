const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
 module.exports = class Queue {
  constructor() { 
    this.size = 0;
    this.top = null;
    this.last = null;
  
  }

  getUnderlyingList() {
   return this.top;
  }

  enqueue( value ) {
    const newElement = new ListNode(value);
    if (!this.size) {
      this.top = newElement;
      this.last = newElement;
    }
    else {
      this.last.next = newElement;
      this.last = newElement;
    }
    this.top++;
    return this;
  }

  dequeue() {
    if (!this.top) 
    return null;
    const deleted = this.top;
    if (this.top === this.last) {
      this.last = null;
    }
    this.top = this.top.next;
    this.size--;
    return deleted.value;
  }

}

