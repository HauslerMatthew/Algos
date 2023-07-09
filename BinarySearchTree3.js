class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    insert(value){
        let newNode=new Node(value)
        if(this.root==null){
            this.root=newNode
        }
        else{
            let runner=this.root;
            while(runner!=null){
                if(newNode.value>runner.value){
                    if (runner.right==null){
                        runner.right=newNode
                        return
                    }
                    else{ 
                        runner=runner.right
                    }
                }
                else if (newNode.value<runner.value){
                    if (runner.left==null){
                        runner.left=newNode
                        return
                    }
                    else{ 
                        runner=runner.left
                    }
                }
                else{
                    console.log("No duplicates")
                    return 0;
                }
            }
        }
    }
    getRootNode() { 
        return this.root; 
    }
    //new function, print the full tree (will have to get creative with the console)
    printTree(node){
        console.log("Current node=",node.value)
        if(node.left != null){
            console.log("Left node of",node.value,"= " + node.left.value);
            this.printTree(node.left);
        }
        if(node.right != null){
            console.log("Right node of",node.value," = " + node.right.value);
            this.printTree(node.right);
        }
    }
    //find the height of the tree
    height(root){ 
        if(root == null){
            return 0;
        }
        var leftHeight = this.height(root.left);
        var rightHeight = this.height(root.right);
        //will need to compare each side from the root to find the taller side, then increment 
        return Math.max(leftHeight, rightHeight) + 1;
    }
    //check if BST is balanced (same length each side from root)
    isBalanced(root){
        if(root == null){
            return true;
        }
        var heightDif = Math.abs(this.height(root.left) - this.height(root.right));
        if(heightDif > 1) return false; 
        return true;
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
console.log(myBST.height(root)); //should be 4
console.log(myBST.isBalanced(root)); //should be true

myBST.insert(50);
console.log(myBST.isBalanced(root)); //should be false