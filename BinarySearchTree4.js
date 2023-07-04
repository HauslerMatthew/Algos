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
    findMinNode(node) { 
    if(node.left === null) 
        return node; 
    else
        return this.findMinNode(node.left); 
    } 
    remove(value) {
        this.root = this.removeNode(this.root, value);
    }
    removeNode(node, val) {
        if (node === null)
            return null;

        else if (val < node.value) {
            node.left = this.removeNode(node.left, val);
            return node;
        }

        else if (val > node.value) {
            node.right = this.removeNode(node.right, val);
            return node;
        }

        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            }

            else if (node.right === null) {
                node = node.left;
                return node;
            }

            var aux = this.findMinNode(node.right);
            node.value = aux.value;

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