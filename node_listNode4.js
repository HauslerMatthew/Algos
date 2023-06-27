class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
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

function displayList(node) {
    var output = "Contents of list are: ";
    var runner = node;
    while (runner != null) {
        output += runner.value + " ";
        runner = runner.next;
    }
    return output
}

//partitionList(node, target)

// rearrange nodes in the list so that all nodes with a value less than the target value come first, followed by all nodes with a value greater than the target value.
// split this up into multiple tasks!
// the function should work even if, for ex, no nodes in the list have a value equal to the target value.
// assuming target is 4
// return the new head of the list (if applicable)
// ex: 3 7 2 4 9 8 4 6 1 -> 3 2 1 4 4 7 9 8 6

function partitionList(node, target) {
    
}

x = new ListNode(3);
x = addBack(x,7);
x = addBack(x,2);
x = addBack(x,4);
x = addBack(x,9);
x = addBack(x,8);
x = addBack(x,4);
x = addBack(x,6);
x = addBack(x,1);
console.log(displayList(x));
