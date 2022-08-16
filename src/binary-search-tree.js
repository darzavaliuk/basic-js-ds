const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinaryNode {
    constructor(data) {
        this.right = null;
        this.left = null;
        this.data = data;
    }
}

class BinarySearchTree {
    constructor() {
        this.rot = null;
    }

    root() {
        if (!this.rot) return null;
        return this.rot;
    }

    add(data) {
        var newNode = new BinaryNode(data);
        if (!this.rot) {
            this.rot = new BinaryNode(data);
            return;
        }

        this.addNode(this.rot, newNode);
    }

    addNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) node.left = newNode;
            else this.addNode(node.left, newNode);
        } else {
            if (node.right === null) node.right = newNode;
            else this.addNode(node.right, newNode);
        }
    }

    has(data) {
        if (!this.rot) return null;
        let current = this.rot;
        while (true) {
            if (!current) return false;
            if (data === current.data) return true;
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
    }

    find(data) {
        if (!this.rot) return null;

        let current = this.rot;
        let found = false;
        while (current && !found) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            } else {
                found = current;
            }
        }

        if (!found) return null;
        return found;
    }

    remove(data) {
        this.rot = remove(this.rot, data);

        function remove(node, data) {
            if (!node) {
                return null;
            }

            if (data < node.data) {
                node.left = remove(node.left, data);
                return node;
            } else if (data > node.data) {
                node.right = remove(node.right, data);
                return node;
            } else {
                if (node.left === null && node.right === null) {
                    return null;
                }

                if (node.left === null || node.right === null) {
                    return node.left === null ? node.right : node.left;
                }

                if (node.left !== null || node.right !== null) {
                    let current = node.left;

                    while (current.right) {
                        current = current.right;
                    }
                    node.data = current.data;
                    node.left = remove(node.left, current.data);

                    return node;
                }
            }
        }
    }

    min() {
        if (this.rot === null) {
            return null;
        }
        let currNode = this.rot;

        while (currNode.left !== null) {
            currNode = currNode.left;
        }
        return currNode.data;
    }

    max() {
        if (this.rot === null) {
            return null;
        }
        let currNode = this.rot;

        while (currNode.right !== null) {
            currNode = currNode.right;
        }
        return currNode.data;
    }
}

// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
// tree.remove(14);
// tree.remove(8);
// tree.remove(9);

// console.log(tree.has(6));

module.exports = {
    BinarySearchTree,
};
