const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
    this.parenthNode = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.treeRoot;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.treeRoot) {
      this.treeRoot = new Node(data);
      return;
    }

    this._checkNode(this.treeRoot, data);
  }

  _checkNode(node, data) {
    if (data < node.data) {
      if (node.left) {
        this._checkNode(node.left, data);
      } else {
        node.left = new Node(data);
      }
    }

    if (data > node.data) {
      if (node.right) {
        this._checkNode(node.right, data);
      } else {
        node.right = new Node(data);
      }
    }
  }

  has(data) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this._checkHasNode(this.treeRoot, data);
  }

  _checkHasNode(node, data) {
    let result = false;

    if (data === node.data) {
      result = true;
    }

    if (data < node.data && node.left) {
      result = this._checkHasNode(node.left, data);
    }

    if (data > node.data && node.right) {
      result = this._checkHasNode(node.right, data);
    }

    return result;
  }

  find(data) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this._searchNode(this.treeRoot, data);
  }

  _searchNode(node, data) {
    let result = null;

    if (data === node.data) {
      result = node;
    }

    if (data < node.data && node.left) {
      this.parenthNode = node;
      result = this._searchNode(node.left, data);
    }

    if (data > node.data && node.right) {
      this.parenthNode = node;
      result = this._searchNode(node.right, data);
    }

    return result;
  }

  remove(data) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    this.treeRoot = this._removeNode(this.treeRoot, data);
  }

  _removeNode(node, data) {

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    }

    if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    }

    if (!node.left && !node.right) {
      return null;
    }

    if (!node.left) {
      node = node.right;
      return node;
    }

    if (!node.right) {
      node = node.left;
      return node;
    }

    let minRight = node.right;
    while (minRight.left) {
      minRight = minRight.left;
    }

    node.data = minRight.data;
    node.right = this._removeNode(node.right, minRight.data);

    return node;
  }

  min() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here

    let result = null;
    if (!this.treeRoot) {
      return result;
    }

    let node = this.treeRoot;

    while (node.left) {
      node = node.left;
    }

    result = node.data;
    return result;
  }

  max() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    let result = null;
    if (!this.treeRoot) return result;
    let node = this.treeRoot;

    while (node.right) {
      node = node.right;
    }

    result = node.data;
    return result;
  }

  show() {
    return this.treeRoot;
  }
}

const tree = new BinarySearchTree();
tree.add(15);
tree.add(8);
tree.add(3);
tree.add(10);
tree.add(11);
tree.add(24);
tree.add(2);

// console.log("--- : ", tree.remove(15));
// console.log("--- afteRemove: ", tree.show());
// console.log("--- 2: ", tree.show());
// console.log("--- search: ", tree.has(2));
// console.log("--- 2: ", tree.show());
// console.log("--- find: ", tree.find(2));
// console.log("--- min: ", tree.min());
// console.log("--- min: ", tree.max());

module.exports = {
  BinarySearchTree,
};
