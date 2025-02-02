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
    let newElement = new ListNode(value);
    if (this.size===0) {
      this.top = newElement;
      this.last = newElement;
      this.size = 1;
    }
    else {
      this.last.next = newElement;
      this.last = this.last.next;
      this.size++;
    }
    return this.top;
  }

  dequeue() {
    let current = this.top;
    this.top = this.top.next;
    this.size--;

    return current.value;
  }

}

