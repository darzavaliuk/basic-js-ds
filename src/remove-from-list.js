const { NotImplementedError, ListNode } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

function removeKFromList({value, next}, k) {
    if (value === k && (next != null || value === k)) {
      return next ? removeKFromList(next, k): null
    } else if (next != null){
      return {
        next: removeKFromList(next, k),
        value
      };
    } else
    return {value, next}
}


// var list = {value: 1, next: {value: 3, next: {value: 1, next: {value: 4, next: null}}}}
// console.log(removeKFromList(list, 1))

module.exports = {
    removeKFromList,
};
