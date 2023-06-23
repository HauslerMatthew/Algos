class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function addFront(node, value) {
    var new_node = new ListNode(value);
    new_node.next = node;
    return new_node;
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

function removeFromBack(node) {
    var runner = node;
    if (runner.next == null) {
        runner.value = null;
    }
    while (runner.next.next != null) {
        runner = runner.next;
    }
    runner.next = null;
    return node;
}

function removeFromFront(node) {
    if (node.value == null) {
        return null
    }
    var new_node = node.next;
    node.next = null;
    return new_node;
}

function generateLinkedList(length) {
    if (length < 1) {
        return null;
    }
    let y = new ListNode(Math.round(Math.random() * 100));
    while (length > 1) {
        y = add_Back(y, Math.round(Math.random() * 100));
        length -= 1;
    }
    return y;
}

//alternate to the above generate list that doesnt call another function. 
function newList(max_value, length) {
    list = new ListNode(Math.round(Math.random() * max_value));
    node = list;
    for (var i = 0; i < length - 1; i++) {
        node.next = new ListNode(Math.round(Math.random() * max_value));
        node = node.next;
    }
    return list;
}

// x = new ListNode(8);
// x = addBack(x,3);
// x = addBack(x, 5);
// x = addBack(x, 7);
// x = addBack(x, 9);
// // console.log(x.value);
// // console.log(x.next.value);
// // console.log(x.next.next.value);
// // x = removeFromFront(x);
// console.log(displayList(x));

function moveMinToFront(node) {
    var runner = node;
    var min = node;
    while (runner != null) {
        if (runner.value < min.value) {
            min = runner;
        }
        runner = runner.next;
    }

    if (min == node) {
        return node;
    }

    runner = node;
    while (runner.next != min) {
        runner = runner.next;
    }
    runner.next = min.next;
    // could also say runner.next = runner.next.next
    min.next = node;
    return min;
}

// x = newList(10, 5);
// console.log(displayList(x));
// x = moveMinToFront(x);
// console.log(displayList(x));

//-------------------------------------moveMaxToBack---------------------------------------//

function SLLength(node) {
    var count = 1;
    while (node.next != null) {
        count++;
        node = node.next;
    }
    return count;
}

function SLMax(node) { //returns an integer
    var max = node;
    while (node != null) {
        if (node.value > max.value) {
            max = node;
        }
        node = node.next;
    }
    return max;
}

function moveMaxToBack(node) {

    //check some edge cases for lengths of 0, 1 and 2
    if (SLLength(node) <= 1) {
        return node;
    }

    if (SLLength(node) == 2) {
        if (node.value > node.next.value) {
            new_head = node.next;
            new_head.next = node;
            node.next = null;
            return new_head;
        }
        else {
            return node;
        }
    }
    // setting up variables we'll need
    var head = node;
    var max = SLMax(node);
    var before_max = null;
    var runner = node;

    // one last edge case - the head is the largest node
    if (runner == max) {
        console.log("Head is already max")
        while (runner.next != null) {
            runner = runner.next;
        }
        new_head = head.next;
        head.next = null;
        runner.next = head;
        return new_head;
    }

    while (runner.next != null) {
        if (runner.next == max) {
            before_max = runner;
        }
        runner = runner.next;
    }

    if (runner == max) {
        return head;
    }

    else {
        before_max.next = max.next;
        max.next = null;
        runner.next = max;
        return head;
    }
}

// x = newList(10, 5);
// console.log(displayList(x));
// x = moveMaxToBack(x);
// console.log(displayList(x));

