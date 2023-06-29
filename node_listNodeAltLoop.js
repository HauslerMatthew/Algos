class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class SLL{
    constructor(){
        this.head = null;
        this.nodeCount;
    }

    addToFront(val){
        this.nodeCount++;
        //make a new node
        //set the next value of the node to current head
        //set the head to the new node
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }
    hasCycle() { //in our class methods, we include a node counter, if we run through a list and increment loop counter, we will exceed the node counter if there is a loop. 
        let loopCount = 0;
        var runner = this.head;
        while(runner != null){
            loopCount++;
            runner = runner.next;
            if(loopCount > this.nodeCount) {
                console.log("true");
                return true;
            }
        }
        console.log("false");
        return false;
    }
    printMe(){
        let runner = this.head;
        while(runner != null){
            console.log(`${runner.val} ->`);
            runner = runner.next;
        }
    }


    addToBack(val){
        this.nodeCount++;
        if(!this.head) {
            return -1;
        }
        let runner = this.head; // EDGE CASE: What happens if there is nothing in the list?
        while(runner.next != null){
            runner = runner.next;
        }
        runner.next = new Node(val);
    }
}


let mySLL = new SLL();
mySLL.addToFront(15);
mySLL.addToFront(16);
mySLL.addToFront(17);
mySLL.addToFront(17);
mySLL.addToBack(13);
mySLL.addToBack(-4);
mySLL.addToBack(98);
mySLL.addToBack(1400);
mySLL.addToBack(-67);
mySLL.addToBack(423);
mySLL.addToBack(2);
mySLL.hasCycle();
