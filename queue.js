class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLQueue {
    constructor() {
        this.contents = null;
        // bonus: what changes could we make to this class to make the below methods way easier to use, in particular the enqueue method?
        this.head = null;
        this.tail = null; //this lets you track both the head and tail of a list.
    }

    //enqueue(value)
    // add a node with the given value to the end of the queue
    enqueue(value)  {
        var new_node = new ListNode(value);
        if (this.contents == null){
            this.contents = new_node;
        }
        else{
            var runner = this.contents;
            while (runner.next != null) {
            runner = runner.next;
            }
            runner.next = new_node;
        }
    }

    //dequeue()
    // remove and return the node from the head queue
    dequeue() {
        if (this.contents == null) {
            return null;
        }
        else {
            var tmp = this.contents;
            this.contents = this.contents.next;
            tmp.next = null;
            return tmp.value;
        }
    }

    //front()
    // return value from the head of the queue
    front() {
        if (this.contents == null) {
            return null;
        } 
        else {
            return this.contents.value;
        }
    }

    // contains(value)
    // return true if queue contains value and false otherwise
    contains(value){
        if (value == null) {
            console.log("No value specified.");
            return false;
        }
        //loop through every node from head
        let current = this.contents;
        while (current) {
            if (current.value === value) { 
                return true;
            }
            current = current.next;
        }
        return false
    }

    // isEmpty()
    // return true if queue has no values in it and false otherwise
    isEmpty() {
        if (this.contents == null) {
            return true;
        }
        return false;
    }

    // size()
    // return number of items in the queue
    size() {
        let counter = 0;
        let current = this.contents;
        while (current) {
            counter += 1;
            current = current.next;
        }
        return counter;
    }


  // bonus:
  // compareQueue(queue_a, queue_b)
  // return true if the queues have the same values
  // in the same order (same length is implied),
  // false otherwise

    compareQueue(queue_a, queue_b) {
        if (queue_a == null || queue_b == null) {
            console.log("Please specify both values.");
            return false;
        }
        //loop through every node from head
        let current = this.contents;
        while (current) {
            if (current.next == null) {
                return false
            }
            if (current.value === queue_a && current.next.value === queue_b) { 
                return true;
            }
            current = current.next;
        }
        return false
    }
}

x = new SLQueue();
console.log(x.isEmpty());
x.enqueue(7);
x.enqueue(3);
x.enqueue(4);
console.log(x.size());
console.log(x.contains(4));
console.log(x.dequeue());
console.log(x.contains(4));
console.log(x.isEmpty());
console.log(x.size());
console.log(x.compareQueue(3,4));
console.log(x.compareQueue(4,3));
console.log(x.compareQueue(3,6));
console.log(x.compareQueue());
console.log(x);