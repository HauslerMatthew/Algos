// node - the head of the list
// value - the int we provide a node

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//Generate a new listnode, with random values, by specifying a max value and total number of nodes wanted. 

function newList(max_value, length) {
    list = new ListNode(Math.round(Math.random() * max_value)); //generates a random number (max value being the highest possible)
    node = list; //sets this random number as the head in a new variable called node
    for (var i = 0; i < length - 1; i++) {
        node.next = new ListNode(Math.round(Math.random() * max_value)); //repeats process for length (total number of nodes)
        node = node.next; //sets next value then runs to next node (needed to keep original List var from changing as you iterate through each one.)
    }
    return list;
}

//prior functions - use display and addback

function displayList(node) {
    var output = "Contents of list are: ";
    var runner = node;
    while (runner != null) {
        output += runner.value + " ";
        runner = runner.next;
    }
    return output
}

function addBack(node, value) {
    var new_node = new ListNode(value);
    var runner = node;
    while (runner.next != null) {
        runner = runner.next;
    }
    runner.next = new_node;
    return node;
}

// target - the value of a node we're seeking
// create a node with the given value and insert it before the node with the target value.
// if list has multiple nodes with target, put it before the first instance of that value.
// if no node is found with the target value, put it at the end of the list (tail)
// return the (potentially new) head.

// fn(node x, 4, 6): 3 9 6 2 -> 3 9 4 6 2

function prependVal(node, value, target) {
    //create the new node with the specified value and a runner
    var new_node = new ListNode(value)
    var runner = node

    //first cornercase, the node is empty - then just return the new node
    if (node == null) {
        return new_node;
    }

    //second cornercase, the nodes head is the specified value - then set it as new nodes next and return new node.
    if (node.value == target) {
        new_node.next = node;
        return new_node;
    }
    
    //runners block that goes through the list to find target
    while (runner != null) {
        //value is found (current nodes next value is the target), set the new node ahead of it and return original node. will do this at first instance
        if (runner.next.value == target) {
            new_node.next = runner.next
            runner.next = new_node
            return node
        }
        runner = runner.next; //move the runner along if it doesnt pass first if

        //if runner is at end of list and didnt find target, add it at tail of node. 
        if (runner.next == null) {
            runner.next = new_node;
            return node;
        }
    }
}

x = new ListNode(3);
x = addBack(x,9);
x = addBack(x,6);
x = addBack(x,2);


console.log(displayList(x));
x = prependVal(x, 4, 6);
console.log(displayList(x));

y = newList(1, 10);
console.log(displayList(y));
y = prependVal(y, 4, 1);
console.log(displayList(y));
