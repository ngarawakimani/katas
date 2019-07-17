const app = require('./src/app');
const ShoppingCart = require('./src/ShoppingCart');
const tree = require('./src/BinaryTree');

//findMissingLetter(['a','b','c','d','f']);

//console.log(app.minimumSwaps([3,1,2,4]));

// var cart = new ShoppingCart();

// cart.addItem("Mango", 3, 10);
// cart.addItem("Orange", 16, 10);

// console.log(cart.checkout(265));

class TreeNode {

    constructor(data, left=null, right=null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }

}
  
function compare(a, b){
  
    if(a !== null && b !== null){
        treeNodeA = new TreeNode(a.val, a.left, a.right);
        treeNodeB = new TreeNode(b.val, b.left, b.right);
    }else{
    }

    const binaryTreeCompare = (treeNodeA, treeNodeB) => {

            // Return true if both trees are empty  
        if (treeNodeA == null && treeNodeB == null) {
            return true; 
        } 
    
        // Return false if one is empty and other is not  
        // if (treeNodeA != null || treeNodeB != null) {
        //     //return false;  
        // }
    
        // Create an empty queues for simultaneous traversals  
        q1 = []; 
        q2 = [];  
    
        // Enqueue Roots of trees in respective queues  
        q1.push(treeNodeA);  
        q2.push(treeNodeB);  
    
        while (q1.length !== 0 && q2.length !== 0){  
            // Get front nodes and compare them  
            n1 = q1[0];  
            n2 = q2[0];  
    
            if (n1.data != n2.data) {
                return false;
            }  
    
            // Remove front nodes from queues  
            q1.shift(); 
            q2.shift();  
    
            /* Enqueue left children of both nodes */
            if (n1.left != null && n2.left != null)  {  
                q1.push(n1.left);  
                q2.push(n2.left);  
            }  
    
            // If one left child is empty and other is not  
            else if (n1.left != null || n2.left != null)  {
                return false; 
            }
    
            // Right child code (Similar to left child code)  
            if (n1.right != null && n2.right != null)  {  
                q1.push(n1.right);  
                q2.push(n2.right);  
            }  
            else if (n1.right != null || n2.right != null)  {
                return false;  
            }
        }  
    
        return true;

    };

    return binaryTreeCompare(treeNodeA, treeNodeB);
}

var aNode = {val: 1, left: null, right: null};
var bNode = {val: 1, left: null, right: null};
var cNode = {val: 2, left: null, right: null};

console.log(compare(aNode, cNode));
