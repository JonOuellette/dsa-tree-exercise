/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    let sum = 0;
    let queue = [this.root]; 

    while (queue.length > 0) {
      const current = queue.shift(); 
      sum += current.val; 
      
      for (const child of current.children) {
        queue.push(child);
      }
    }
    return sum;
    
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let count = 0
    let queue = [this.root];

    while (queue.length > 0){
      const current = queue.shift()
      if (current.val % 2 === 0 ) {
        count++
      }
      for (const child of current.children){
        queue.push(child)
      }
    }

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let count = 0;
    let queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift();
      if (current.val > lowerBound) count++;

      for (const child of current.children) {
        queue.push(child);
      }
    }
    return count;
  }

  }


module.exports = { Tree, TreeNode };
