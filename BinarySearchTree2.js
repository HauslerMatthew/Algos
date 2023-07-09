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
    getRootNode() { 
        return this.root; 
    } 
    findMin(){ //min values always store to the left, once you find the value whose left value is null you know you're there. 
        var runner = this.root;
        while(runner.left != null){
            runner = runner.left
        }
        return runner
    }
    findMax(){ //inverse of min logic, greater values store to the right. 
        var runner = this.root;
        while(runner.right !=null){
            runner = runner.right
        }
        return runner
    }
    insert(value){
        let newNode=new Node(value)
        //first insert will establish the root and store there
        if(this.root==null){
            this.root=newNode
        }
        //
        else{
            let runner=this.root;
            //block to determine where new value is placed in the tree. 
            while(runner!=null){
                if(newNode.value>runner.value){
                    if (runner.right==null){
                        runner.right=newNode
                        return //blank return just ends the function, we have placed the value accordingly in the BST at this point
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
                //if a duplicate value was provided, it will not pass any of the if/elseif checks above and not alter the BST.
                else{
                    console.log("No duplicates")
                    return 0;
                }
            }
        }
    }

    contains(value) {
        let runner=this.root
        while(runner!=null){
            if(runner.value==value){
                return true
            }
            else if (value>runner.value){
                runner=runner.right
            }
            else{
                runner=runner.left
            }
        }
        return false;
    }

    size(node) {
        let count = 1;
        if(node.right!=null&&node.left!=null){
            count+=this.size(node.right);
            count+=this.size(node.left);
        }
        else if(node.right!=null){
            count+=this.size(node.right);
        }
        else if(node.left!=null){
            count+=this.size(node.left);
        }
        return count;
    }

    //size(node){
        //if(node == null) return 0;
        //else return(this.size(node.left)+1+this.size(node.right))
    //}
}


var myBST = new BST();
myBST.insert(25);
myBST.insert(30); 
myBST.insert(20); 
myBST.insert(40);
myBST.insert(21);
myBST.insert(44);
myBST.insert(12);
console.log(myBST.contains(30));
console.log(myBST.contains(50));
var root = myBST.getRootNode()
console.log(myBST.size(root));
console.log(myBST);