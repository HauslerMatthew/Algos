class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    printValuesForward(){
        let runner = this.head;
        while(runner != null){
            console.log(`${runner.val} ->`);
            runner = runner.next;
        }
    }
    printValuesBackward(){
        let runner= this.tail;
        while(runner != null){
            console.log(`${runner.val} ->`)
            runner=runner.prev
        }
    }
    addToFront(val){
        let newNode=new Node(val)
        if (this.head==null){
            this.head=newNode
            this.tail=newNode
        }
        else{
            let runner=newNode
            runner.next=this.head
            let prevHead=this.head
            prevHead.prev=runner
            this.head=runner
        }
    }
    addToBack(val){
        let newNode=new Node(val)
        if (this.tail==null){
            this.tail=newNode
            this.head=newNode
            
        }
        else{
            let runner=newNode
            runner.prev=this.tail
            let prevTail=this.tail
            prevTail.next=runner
            this.tail=runner
        }
    }
    removeFromFront(){
        if(this.head==null){
            console.log("Nice try, empty list")
        }
        else if(this.head.next==null){
            this.head=null
            this.tail=null
        }
        else{
            let runner= this.head
            let newHead= runner.next
            newHead.prev=null
            this.head=newHead
        }
    }
    removeFromEnd(){
        if(this.head==null){
            console.log("Nice try, empty list")
        }
        else if(this.head.next==null){
            this.head=null
            this.tail=null
        }
        else{
            let runner= this.tail
            let newTail= runner.prev
            newTail.next=null
            this.tail=newTail
        }
    }
}


var myDLL = new DLL();
myDLL.addToBack(13);
myDLL.addToBack(9)
myDLL.addToBack(4);
myDLL.addToBack(98);
// myDLL.removeFromFront();
// myDLL.removeFromEnd();


myDLL.printValuesForward();
console.log("=================")
myDLL.printValuesBackward();
