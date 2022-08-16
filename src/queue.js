const { NotImplementedError } = require("../extensions/index.js");

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

class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    getUnderlyingList() {
        return this.head;
    }

    enqueue(value) {
        if (this.head == null) {
            var r = new QueueNode(value);
            this.head = r;
            this.tail = this.head;
            return;
        }

        if (this.tail == this.head) {
            var r = new QueueNode(value);
            this.tail = r;
            this.head.next = this.tail;
        } else {
            var r = this.tail;
            this.tail = new QueueNode(value);
            r.next = this.tail;
            return;
        }
    }

    dequeue() {
        if (!this.tail) return null;

        if (this.tail != this.head) {
            var r = this.head.value;
            this.head = this.head.next;
            return r;
        } else {
            var r = this.head.value;
            this.head = null;
            this.tail = null;
            return r;
        }
    }
}

module.exports = {
    Queue,
};
