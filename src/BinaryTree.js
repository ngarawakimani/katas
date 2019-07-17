class TreeNode {
    constructor(data, left=null, right=null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  
  function compare(a, b){
    
    let result = [];
    let queue = [];
  
      treeNodeA = new TreeNode(a.val, a.left, b.right);
      treeNodeB = new TreeNode(b.val, b.left, b.right);
  
      queue.push(treeNodeA);
  
      while(queue.length) {
        let currentNode = queue.shift()
  
        result.push(currentNode.val)
  
        if (currentNode.left) {
          queue.push(currentNode.left)
        }
        if (currentNode.right) {
          queue.push(currentNode.right)
        }
      }
    
    return false;
  }