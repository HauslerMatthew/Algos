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
    // prependToValue(findvalue, newValue){
    //     if(this.head==null){
    //         console.log("Nice try, empty list")
    //     }
    //     else{
    //         let runner =this.head;
    //         while(runner.val!=findvalue||runner==null){//This looks for the value in the array or goes to the end of the list
    //             runner=runner.next
    //         }
    //         if (runner==null){
    //             console.log("The list does not contain the value")
    //         }
    //         else{
    //             //console.log(runner)
    //             let newNode = new Node(newValue)
    //             let prevNode=runner.prev
    //             prevNode.next=newNode
    //             newNode.prev= runner.prev
    //             runner.prev=newNode
    //             newNode.next=runner
    //         }
            
    //     }
    // }
    // appendValue(findvalue, newValue) {
    //     let runner = this.head;
    //     while (runner != null) {
    //         if (findvalue == runner.val) {
    //             var newNode = new Node(newValue);
    //             newNode.next = runner.next;
    //             runner.next = newNode;
    //         }
    //         runner = runner.next;
    //     }
    // }
    // removeValue(findvalue){
    //     // remove a node based on the value
    //     if(this.head==null){
    //         console.log("Nice try, empty list")
    //     }
    //     else{
    //         let runner =this.head;
    //         while(runner.val!=findvalue||runner==null){//This looks for the value in the array or goes to the end of the list
    //             runner=runner.next
    //         }
    //         if (runner==null){
    //             console.log("The list does not contain the value")
    //         }
    //         else{
    //             let prevNode=runner.prev
    //             let nextNode=runner.next
    //             prevNode.next=nextNode
    //             nextNode.prev=prevNode
    //         }
            
    //     }
    // }
}

var myDLL = new DLL();
myDLL.addToFront(48);
myDLL.addToBack(13);
myDLL.addToBack(9)
myDLL.addToBack(4);
myDLL.addToBack(98);
myDLL.prependToValue(9,19);
myDLL.appendValue(4,44);
myDLL.removeValue(4);


myDLL.printValuesForward();