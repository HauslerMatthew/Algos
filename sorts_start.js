// //-------------------------bubble sort------------------------------------------//
// this method checks 2 concurrent values at a time and swaps if necessary, in order to 
// fully sort, it needs to check the same array multiple times, ie. the smallest
// value is the last value in array, it will not properly sort unless its swapped 
// each time the the inital loop checks each pair of values for as many values are in the array

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([17, 23, 500, 680, 140, 555, 789, 3000, 1, 12]));


const bubbleSortArrow = arr => { //practice with arror syntax
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

console.log(bubbleSortArrow([17, 23, 500, 680, 140, 555, 789, 3000, 1, 12]));

// //-----------------------------selection sort----------------------------------//
// This method is slightly more efficient than bubble, it still iterates the entire array 
// but finds the minimum value immediately and places it at the front, then continues this 
// pattern for the next index until it reaches the end of the array.  So, its iterating 
// over less values in the array each time. 

function selectionSortMin(arr) {
    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min != i) {
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSortMin([17, 23, 500, 680, 140, 555, 789, 3000, 1, 12]));

const selectionSortMin2 = arr => {  //cleaner version of above. 
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

console.log(selectionSortMin2([17, 23, 500, 680, 140, 555, 789, 3000, 1, 12]));

// this version works the same as min, but instead finds max value and places it at end of array, then repeats this pattern
// for the previous values, it's basically just working from the end to start instead of start to end. 

function selectionSortMax(arr) {
    for (let i = 0; i < arr.length; i++) {
        let bigIndex = 0;
        let big = arr[0];
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > big) {
                big = arr[j];
                bigIndex = j;
            }
        }
        let temp = arr[bigIndex];
        arr[bigIndex] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(selectionSortMax([17, 23, 500, 680, 140, 555, 789, 3000, 1, 12]));

// //-----------------------------combine & merge sort----------------------------//

//given 2 (already sorted) arrays, create a function that combines them into one sorted array.
var x = [5, 7, 12, 19];
var y = [2, 4, 5, 13];

//makes new array
function combineArrays(arr1, arr2) {
    var result = [];
    var i = 0;
    var j = 0;
    while (i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i]);
            i++
        } else {
            result.push(arr2[j]);
            j++
        }
    }
    while (i<arr1.length){
        result.push(arr1[i])
        i++
    }
    while (j<arr2.length){
        result.push(arr2[j])
        j++
    }
    return result;
}

stuff = combineArrays(x, y); //should output [2,4,5,5,7,12,13,19]
console.log(stuff);

//bonus, change function so it changes the first array with the expected sort. 

//Do this next. 

function mergeSort(arr){ //merge sort breaks down an array into several arrays with one value, then combines them into a sorted array using the combineArrays method above
    if(arr.length <=1){
        return arr;
    }
    let mid=Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return combineArrays(left, right);
}

console.log(mergeSort([2,4,18,1,7,6]));

//-----------------------------array partition----------------------------------//

//move the first value in an array such that items before it are less than, and items after are greater than.
//i.e. target 4, the array would become [3,1,4,8,7,5], the function should just return which index the value was moved to. 

function arrayPartition(arr){
    let count = 0;
    for(let i=1; i<arr.length; i++) {
        if(arr[i]<arr[count]){
            let temp = arr[count];
            arr[count]=arr[i];
            arr[i]=temp;
            console.log("loop number", i, arr);
            count += 1;
            temp=arr[i];
            arr[i]=arr[count];
            arr[count]=temp;
        }

    }
    console.log(arr);
    console.log("pivot point is array index: " + count)
    return count;
}

let newArr=[4,3,8,7,5,1];
// arrayPartition(newArr);

function partition(arr){
    function swap(array, a, b){
        var temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }
    let pivot = arr[0];
    let swapIndex = 0;
    for (var i = 1; i<arr.length; i++){
        if(pivot>arr[i]){
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, 0, swapIndex);
    console.log("the pivot point in array is index", swapIndex, arr);
    return swapIndex;
}

//-----------------------------quick sort (using partition)----------------------------------//

var arr = [5, 3, 7, 6, 2, 9]; //[3,2,5,7,6,9]

function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) {
            //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

// // first call to quick sort
// var sortedArray = quickSort(arr, 0, arr.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]



//------------in class----------//

function partition(arr, start=0, end=arr.length-1){
    function swap(array, x,y){
        var temp = array[x];
        array[x]= array[y];
        array[y] = temp
    }
    let pivot = arr[start];
    let swapIdx = start;
    for(var i = start+1; i<=end; i++){
        if(pivot> arr[i]){
            swapIdx++
            //the purpose of this swap is to jumble up the numbers that are smaller than the pivot number together
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

function quickSort(arr, left=0, right=arr.length-1){
    if(left<right){
        let pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex-1);
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}

console.log(quickSort([17, 23, 500, 680, 140, 555, 789, 3000, 1, 12]));