const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class StackNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.root = null;
        this.n = 0;
    }

    push(value) {
        var old = this.root;
        this.root = new StackNode(value);
        this.root.next = old;
        this.n++;
    }

    isEmpty() {
        return this.n === 0;
    }

    pop() {
        if (this.isEmpty()) return null;
        var old = this.root;
        this.root = old.next;
        this.n--;
        return old.value;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.root.value;
    }
}

module.exports = {
    Stack,
};
