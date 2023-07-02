//write code to construct a minimum value heap, making sure that at each insert the children values swap with its proper parent if needed. 
//parent[1] has children [2] and [3], the parent value must be less than both its children.
//parent children indexes are calculated as [parent index] x 2 and [parent index] x 2 + 1.
//childrens parent are calculated as Math.floor([child index]).

class Heap {
    constructor() {
        this.heap = [null]
    }
    insert(val) {
        this.heap.push(val);


        let current = this.heap.length - 1;
        let parent = Math.floor(current / 2);

        while (this.heap[current] < this.heap[parent]) {
            [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]]; // swap syntax
            current = parent;
            parent = Math.floor(current / 2);
        }

        return this.heap;
    }
}

var h1 = new Heap();
h1.insert(8);
h1.insert(35);
h1.insert(3);
h1.insert(12);
h1.insert(4);
h1.insert(1);
h1.insert(2);

console.log(h1);



