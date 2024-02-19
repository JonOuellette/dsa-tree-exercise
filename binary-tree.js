/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.node) return 0;
    let depth = 0;
    let queue = [[this.root, 1]]

    while (queue.length > 0) {
      let [node, currentDepth] = queue.shift();
      if (!node.left && !node.right) return currentDepth;
      if (node.left) queue.push([node.left, currentDepth + 1]);
      if (node.right) queue.push([node.right, currentDepth + 1]);
    }

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    let stack = [[this.root, 1]];
    let maxDepth = 0;

    while (stack.length > 0) {
      let [node, currentDepth] = stack.pop();
      if (node) {
        maxDepth = Math.max(maxDepth, currentDepth);
        stack.push([node.left, currentDepth + 1]);
        stack.push([node.right, currentDepth + 1]);
      }
    }

    return maxDepth;

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = -Infinity;

    const findMaxSum = (node) => {
      if (node === null) return 0;
      let left = Math.max(0, findMaxSum(node.left)); // Ignore paths with negative sums
      let right = Math.max(0, findMaxSum(node.right));
      maxSum = Math.max(maxSum, node.val + left + right); // Update maxSum including the current node
      return node.val + Math.max(left, right);
    };

    findMaxSum(this.root);
    return maxSum;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let stack = [];
    let current = this.root;
    let nextLarger = null;

    while (stack.length > 0 || current) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      if (current.val > lowerBound && (nextLarger === null || current.val < nextLarger)) {
        nextLarger = current.val;
      }
      current = current.right;
    }

    return nextLarger;


  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
