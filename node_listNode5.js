class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(val) {
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
        let runner = this.head;                 // EDGE CASE: What happens if there is nothing in the list?
        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = new Node(val);
    }

    contains(val) {
        let runner = this.head;
        while (runner != null) {
            if (val == runner.val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    printMe() {
        let runner = this.head;
        while (runner != null) {
            console.log(`${runner.val} ->`);
            runner = runner.next;
        }
    }

    removeFromFront() {
        //  15     13 -> -4 -> 98 -> 1400 -> -67 -> 423 -> 2 -> null
        //         ^^
        //         |temp
        //         head 

        // REMOVE THE FIRST NODE IN YOUR SINGLY LINKED LIST
        if (!this.head) {
            return -1;
        }
        var temp = this.head.next;
        this.head.next = null;
        this.head = temp;
        return this.head;
    }

    removeFromBack() {
        if (!this.head) {
            return -1;
        }
        //  13 -> -4 -> 98 -> 1400 -> -67 -> 423 - / -> 2 
        //   ^
        //   |
        // head 

        var runner = this.head;
        while (runner.next.next != null) {
            runner = runner.next;
        }
        var temp = runner.next;
        runner.next = null;
        return temp;
        // REMOVE THE FINAL NODE IN YOUR SINGLY LINKED LIST
        // your code here
    }

    appendVal(loc, val) {
        // ADD VALUE AFTER SPECIFIC loc (LOCATION) IN A LIST
        if (!this.head) {
            this.head = new Node(val);
        }
        var sprinter = this.head;
        var counter = 1;

        while (counter != loc) {
            sprinter = sprinter.next;
            counter++;
        }

        var newNode = new Node(val);
        newNode.next = sprinter.next;
        sprinter.next = newNode;

    }


    prependVal(location, val) {
        // ADD VALUE BEFORE SPECIFIC LOCATION IN A LIST
        var runner = this.head;
        var counter = 1;
        while (counter + 1 != location) {
            runner = runner.next;
            counter++;
        }

        var newNode = new Node(val);
        newNode.next = runner.next;
        runner.next = newNode;

    }

    reverseList() {
        // REVERSE THE ORDER OF A SINGLY LINKED LIST
        let arr = [];
        let runner = this.head;
        if (this.head == null) {
            return console.log("List doesn't have any values");
        }
        if (this.head.next == null) {
            return this.head;
        }
        while (runner != null) {
            arr.unshift(runner.val);//This function add the values in an array in reverse from the original list
            runner = runner.next;
        }
        for (let i = 0; i < arr.length; i++) {//Now loop through the array adding each value to the list
            this.addToBack(arr[i]);
            this.removeFromFront();
        }
        return this
    }

}

//  reverseList() { // ALT VERSUIN
//     var itemBeforeRunner = null;
//     var itemAfterRunner = null;
//     var runner = this.head;

//     while (runner != null) {
//         itemAfterRunner = runner.next;
//         runner.next = itemBeforeRunner;
//         itemBeforeRunner = runner;
//         runner = itemAfterRunner;     
//     }
//     this.head = itemBeforeRunner;
// }


var mySLL = new SLL();
mySLL.addToFront(15);
mySLL.addToBack(13);
mySLL.addToBack(-4);
mySLL.addToBack(98);
mySLL.addToBack(1400);

mySLL.printMe();
console.log("=================")
mySLL.reverseList();
mySLL.printMe();
