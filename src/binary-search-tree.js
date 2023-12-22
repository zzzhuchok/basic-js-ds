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
    if (!node) return false;
    if (data === node.data) return true;

    return data < node.data
      ? this._checkHasNode(node.left, data)
      : this._checkHasNode(node.right, data);

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
    if (!node) return null;
    if (node.data === data) return node;

    this.parenthNode = node
    return data < node.data
      ? this._searchNode(node.left, data)
      : this._searchNode(node.right, data);

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
    const removeNode = this.find(data);

    if (!removeNode) {
      console.log("--- no removeNode: ");
      return;
    }

    if (!removeNode.left && !removeNode.right) {
      if (this.parenthNode) {
        removeNode.data < this.parenthNode.data
          ? (this.parenthNode.left = null)
          : (this.parenthNode.right = null);
      } else {
        this.treeRoot = null;
      }
      return;
    }

    if (removeNode.left && removeNode.right) {
      const newNode = this._findMinNode(removeNode.right);
      console.log("--- newNode: ", newNode);
      console.log("--- parent: ", this.parenthNode);

      if (this.parenthNode) {
        // this.parenthNode.left.data === removeNode.data
        //   ? (this.parenthNode.left = newNode)
        //   : (this.parenthNode.right = newNode);
      } else {
        this.treeRoot = newNode;
      }

      if (removeNode.right.left) {
        newNode.right = removeNode.right;
      }
      newNode.left = removeNode.left;

      // console.log("--- removeNodeAA: ", removeNode.right);
      // newNode.right = removeNode.right;
      return;
    }

    if (removeNode.left || removeNode.right) {
      removeNode.left
        ? (this.parenthNode.left = removeNode.left)
        : (this.parenthNode.right = removeNode.right);
      return;
    }
  }

  _findMinNode(node) {
    let result = null;
    if (node.left) {
      result = this._findMinNode(node.left);
    } else {
      result = node;
    }

    return result;
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
