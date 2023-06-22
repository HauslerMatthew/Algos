class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// x = new ListNode(7);
// x.next = new ListNode(3);
// x.next.next = new ListNode(6);
// vs.
// x = new ListNode(7);
// addBack(x, 3);
// addBack(x, 6);


// addFront(node, value)
// add a new head to the list with the given value

function addFront(node, value) {
    var new_node = new ListNode(value); //create new node var with provided value
    new_node.next = node; //set previous head as the next value. 
    return new_node;
}


// addBack(node, value)
// add a new tail to the list with the given value

function addBack(node, value){
    var new_node = new ListNode(value); 
    var runner = node; //runner will be set to existing node value
    while (runner.next != null) {
        runner = runner.next; //runner goes through the nodes until it gets to the end
    }
    runner.next = new_node; //last value (that was previously blank) is set to provided value. 
    return node;
}

x = new ListNode(8);
x = addBack(x,3);
x = addBack(x, 5);
console.log(x.next.value);
console.log(x.next.next.value);
x = addFront(x, 1);
console.log(x.next.value);
console.log(x.next.next.value);


// displayList(node)

function displayList(node) {
    var output = "Contents of list are: ";
    var runner = node;
    while (runner != null) {
    output += runner.value + " "; //similar to add buck, but we are just adding string to the output for each value as runner goes through the nodes
    runner = runner.next;
    }
    return output
}

console.log(displayList(x));
x = addFront(x, 7);
x = addBack(x, 11);
console.log(displayList(x));

// containsValue(node, target)
// returns true if target value in linked list,
// false otherwise

function containsValue(node, target) {

    var runner = node;
    while (runner != null) {
        if (runner.value == target) {
        return true;
        }
    runner = runner.next;
    }
    return false;
}

console.log(containsValue(x, 8));
console.log(containsValue(x, 1));
console.log(containsValue(x, 11));
console.log(containsValue(x, 23));

// each of these returns the head of the list (unless it needs to return something else)