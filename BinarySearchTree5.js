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
    findMin() {
        var runner = this.root;
        while (runner.left != null) {
            runner = runner.left
        }
        return runner
    }
    findMax() {
        var runner = this.root;
        while (runner.right != null) {
            runner = runner.right
        }
        return runner
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
    sortedArrToBST(arr){
        if(arr.length == 0){
            console.log("Get a larger array");
            return null;
        }
        var midPoint = arr[Math.floor(arr.length/2)];
        this.insert(midPoint);
        var rightSide = arr.slice([Math.floor(arr.length/2)+1]);
        var leftSide = arr.slice(0, Math.floor(arr.length/2));
        if (rightSide.length > 1){
            this.sortedArrToBST(rightSide);
        }
        if (rightSide.length == 1){
            this.insert(rightSide[0]);
        }
        if (leftSide.length > 1){
            this.sortedArrToBST(leftSide);
        }
        if (leftSide.length == 1){
            this.insert(leftSide[0]);
        }
    }
}


var myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var myBST = new BST();
myBST.sortedArrToBST(myArr);
var root = myBST.getRootNode();
myBST.printTree(root);



// if(arr.length < 1){
//     return null;
// }
// var mid = Math.floor(arr.length/2);
// var root = new Node(arr[mid]);

// root.left = this.sortedArrToBST(arr.slice(0, mid));
// root.right = this.sortedArrToBST(arr.slice(mid+1, arr.length));

// return root;