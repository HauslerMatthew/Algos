//Binary search trees have a root node with a left and right value (which are also nodes).
//any value to the left of a node should be less than the node value, any value to the right of a node should be greater than the node value.
//typically, duplicate values arent allowed. 
//adding to the tree should follow the rules above and preserve the integrity of the tree (depending on value and where it inserts).

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }
    getRootNode() { 
        return this.root; 
    } 
    insert(value) {
        // Creating a node 
        var newNode = new Node(value);
        // root is null then node will 
        // be added to the tree and made root. 
        if (this.root === null)
            this.root = newNode;
        else
            // find the correct position in the  
            // tree and add the node 
            this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode) {
        // if the data is less than the node 
        // data move left of the tree  
        if (newNode.value < node.value) {
            // if left is null insert node here 
            if (node.left === null)
                node.left = newNode;
            else
                // if left is not null recur until  
                // null is found 
                this.insertNode(node.left, newNode);
        }
        // if the data is more than the node 
        // data move right of the tree  
        else {
            // if right is null insert node here 
            if (node.right === null)
                node.right = newNode;
            else
                // if right is not null recur until  
                // null is found 
                this.insertNode(node.right, newNode);
        }
    }
    findMin(node) {
        // if left of a node is null 
        // then it must be minimum node 
        if (node.left === null)
            return node;
        else
            return this.findMin(node.left);
    }
    findMax(node) {
        if (node.right === null)
            return node;
        else
            return this.findMax(node.right)
    }
}

var myBST = new BST();
myBST.insert(25); //this will become root by nature of the function. 
myBST.insert(30); //should insert to the right of the root
myBST.insert(20); //should insert to the left of the root
myBST.insert(40); //should insert to the right of node '30'
console.log(myBST);
var root = myBST.getRootNode();
console.log(myBST.findMin(root));
console.log(myBST.findMax(root));

