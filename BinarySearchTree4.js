//instantiate the node class and BST with previous methods------------------------------
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
        let newNode = new Node(value)
        if (this.root == null) {
            this.root = newNode
        }
        else {
            let runner = this.root;
            while (runner != null) {
                if (newNode.value > runner.value) {
                    if (runner.right == null) {
                        runner.right = newNode
                        return
                    }
                    else {
                        runner = runner.right
                    }
                }
                else if (newNode.value < runner.value) {
                    if (runner.left == null) {
                        runner.left = newNode
                        return
                    }
                    else {
                        runner = runner.left
                    }
                }
                else {
                    console.log("No duplicates")
                    return 0;
                }
            }
        }
    }
    printTree(node) {
        console.log("Current node=", node.value)
        if (node.left != null) {
            console.log("Left node of", node.value, "= " + node.left.value);
            this.printTree(node.left);
        }
        if (node.right != null) {
            console.log("Right node of", node.value, " = " + node.right.value);
            this.printTree(node.right);
        }
    }
    //------------------------------------------------------------------------------

    //add method to find the lowest value in the BST
    findMinNode(node) { 
    if(node.left === null) 
        return node; 
    else
        return this.findMinNode(node.left); 
    } 

    //add method to remove a specified value in the BST
    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    //you will need a helper function that accepts a node and the value to remove, it will also help to use the findMin function you create here. 
    removeNode(node, val) {
        //if nothing in our node class, its empty and we can return nothing. 
        if (node === null)
            return null;
        //if the value specified is smaller than the node root, repeat checking to the left of the root (and so on, after the root)
        else if (val < node.value) {
            node.left = this.removeNode(node.left, val);
            return node;
        }
        //if the value is larger, repeat checking to the right
        else if (val > node.value) {
            node.right = this.removeNode(node.right, val);
            return node;
        }
        //all other cases, aka the value == the current node
        else {
            //if values to left and right of current node are null you can set this node to null to remove it
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            //if only the left of the current node is null, you will set the current node to the right
            if (node.left === null) {
                node = node.right;
                return node;
            }
            //revese case if the right of the current node is null
            else if (node.right === null) {
                node = node.left;
                return node;
            }
            //if neither side of current node is null, we have to find the min value starting from the right of the current node
            var aux = this.findMinNode(node.right);
            //once found, set the node to this value
            //this makes your tree comply with normal BST rules
            node.value = aux.value;
            //once you have done this, we can then recall our helper function to remove the now duplicated right of current node
            //you can do all of this from the left side instead, if you have a findMaxNode function. 
            node.right = this.removeNode(node.right, aux.value);
            return node;
        }
    }
}


var myBST = new BST();
myBST.insert(25);
myBST.insert(30); 
myBST.insert(20); 
myBST.insert(40);
myBST.insert(21);
myBST.insert(44);
myBST.insert(12);
var root = myBST.getRootNode();
myBST.printTree(root);
console.log("--------------------------------------------------");
myBST.remove(40);
myBST.printTree(root);