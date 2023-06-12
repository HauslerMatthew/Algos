class ListNode { //making a node object with a head and next value. 
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLStack {
    constructor() {
        this.contents = null;
    }
    // push(value)
    // add given value to stack
    push(value) { 
        var node = new ListNode(value);
        node.next = this.contents; //the next value in node is set to null
        this.contents = node; //contents is set to the new node value 
    }

    // pop()
    // remove value from the stack and return it
    pop() {
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

    // top()
    // return value at the top of the stack (end of the array)
    top() {
        if (this.contents == null) {
            return null;
        } else {
            return this.contents.value;
        }
    }

    // contains(value)
    // return true if stack contains value and false otherwise
    contains(value) {
        if (value == null) {
            console.log("No value specified.");
            return false;
        }
        //loop through every node from head
        let current = this.contents;
        while (current) {
            if (current.value === value) { // "===" is going to return true or false if the operands are the same type and contain the same value.
                return true;
            }
            current = current.next;
        }
        return false
    }

    // isEmpty()
    // return true if stack has no values in it and false otherwise
    isEmpty() {
        if (this.contents == null) {
            return true;
        }
        return false;
    }

    // size()
    // return number of items in the stack
    size() {
        let counter = 0;
        let current = this.contents;
        while (current) {
            counter += 1;
            current = current.next;
        }
        return counter;
    }
}

x = new SLStack();
console.log(x.isEmpty());
x.push(7);
x.push(3);
x.push(4);
console.log(x.size());
console.log(x.top());
console.log(x.contains(4));
x.pop();
console.log(x.contains(4));
console.log(x.isEmpty());
console.log(x.size());
console.log(x);