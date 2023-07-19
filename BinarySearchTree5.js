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

    //using existing functions and constructors, make a function that accepts a sorted array, then converts it into a BST.
    sortedArrToBST(arr) {
        //cornercase 1, array is empty
        if (arr.length == 0) {
            console.log("Get a larger array");
            return null;
        }
        //BST's need a balance between values (root should be middle value of array) otherwise you end up with a linked list.
        var midPoint = arr[Math.floor(arr.length / 2)];
        //begin creating your BST after you find middle balance to split out values
        this.insert(midPoint);
        //then what will you do with remaining values to the left and right of it?
        //we have a previous block of code from array Binary sorts (we decrease length of the array until we find a target)
        //this creates 2 new arrays from the left and right
        var rightSide = arr.slice([Math.floor(arr.length / 2) + 1]);
        var leftSide = arr.slice(0, Math.floor(arr.length / 2));
        //since our logic is similar with these new arrays (we cannot just insert the arrays or else we end up with straight lines rather than left and right branches)
        //so if our right side has multiple values, we run it through the function again to balance it out at a central point
        if (rightSide.length > 1) {
            this.sortedArrToBST(rightSide);
        }
        //once we have one value to the right, we simply insert that value into our BST (the insert function does the BST logic on where it goes in the tree)
        if (rightSide.length == 1) {
            this.insert(rightSide[0]);
        }
        //repeat for left side of array
        if (leftSide.length > 1) {
            this.sortedArrToBST(leftSide);
        }
        if (leftSide.length == 1) {
            this.insert(leftSide[0]);
        }
    }
}


var myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var myBST = new BST();
myBST.sortedArrToBST(myArr);
var root = myBST.getRootNode();
myBST.printTree(root);


//condensed version

//sortedArrToBST(arr){
// if(arr.length < 1){
//     return null;
// }
// var mid = Math.floor(arr.length/2);
// var root = new Node(arr[mid]);

// root.left = this.sortedArrToBST(arr.slice(0, mid));
// root.right = this.sortedArrToBST(arr.slice(mid+1, arr.length));

// return root;
//}