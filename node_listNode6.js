class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    addToFront(val){
        //make a new node
        //set the next value of the node to current head
        //set the head to the new node
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }
    addToBack(val) {
        if (!this.head) {
            return -1;
        }
        let runner = this.head; // EDGE CASE: What happens if there is nothing in the list?
        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = new Node(val);
    }
    printMe() {
        let runner = this.head;
        while (runner != null) {
            console.log(`${runner.val} ->`);
            runner = runner.next;
        }
    }
    hasCycle() {//tortice and hare -- have two runners of different speed run through the list, if they ever land on the same node, its because there is a loop. 
        let fast = this.head;
        let slow = this.head;
        while (slow.next != null){
            if (fast.next == null || fast.next.next == null){
                return false;
            }
            fast = fast.next.next;
            slow = slow.next;
            if (fast == slow && fast.next == slow.next){
                return true;
            }
        }
    }
}
var mySLL = new SLL();
mySLL.addToFront(15);
mySLL.addToBack(13);
mySLL.addToBack(-4);
mySLL.addToBack(98);
mySLL.addToBack(1400);
mySLL.addToBack(-67);
mySLL.addToBack(423);
mySLL.addToBack(2);
mySLL.printMe();