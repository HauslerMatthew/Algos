// SEARCH THROUGH A SPRTED ARRAY BY DIVIDING THE ARRAY IN HALF AFTER EACH SEARCH
// ONCE TARGET IS LOCATED RETURN TRUE
// DO BOTH RECURSIVELY AND ITERATIVELY
// assume array is always sorted*

function binarySearch(arr, target){
    // YOUR CODE HERE
    if (arr.length<2){
        if(target==arr[0]){
            return true
        }
    }
    let middle=Math.floor(arr.length/2) //Find the middle
    
    while(middle!=0){// 
        if(target==arr[middle]){
            return true
        }
        else if(target>arr[middle]){
            arr=arr.slice(middle, arr.length)
            }
        else{
            arr= arr.slice(0,middle)
        }
        middle=Math.floor(arr.length/2)
    }
    return false
}

function binarySearchRecursive(arr, target){
    var center_index = Math.ceil((arr.length/2)-1)

    if (target == arr[center_index]){
        return true
    }
    else if (target > arr[center_index]){
        var newInput = arr.slice(center_index+1)
        return binarySearchRecursive(newInput, target)
    }
    else if (target < arr[center_index]){
        var newInput = arr.slice(0, center_index)
        return binarySearchRecursive(newInput, target)
    }
    return false
} //splitting original array in half each pass, eventually approaching the target value {log(n)}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 9));
console.log(binarySearchRecursive([1,2,3,4,5,6,7,8,9,10], 9));
console.log(binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 9 ));
console.log(binarySearchRecursive([0, 2, 4, 6, 8, 10, 12, 14, 16], 9 ));
// ---> 1 2 3 4 5  |  6 7 8 9 10
// ---> 6 7  |  8 9 10
// ---> 8  [9]  10  (found)


// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,12,13], 10))    //TRUE
// console.log(binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 9 ))    //FALSE
// console.log(binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 16 ))    //TRUE
// console.log(binarySearch([0, 2, 4, 6, 8, 12, 14, 16], 8 ))    //TRUE
// console.log(binarySearch([8], 8 ))    //TRUE

// console.log(binarySearchRecursive([1,2,3,4,5,6,7,8,9,10,12,13], 10))    //TRUE
// console.log(binarySearchRecursive([0, 2, 4, 6, 8, 10, 12, 14, 16], 9 ))    //FALSE
// console.log(binarySearchRecursive([0, 2, 4, 6, 8, 10, 12, 14, 16], 16 ))    //TRUE
// console.log(binarySearchRecursive([0, 2, 4, 6, 8, 12, 14, 16], 8 ))    //TRUE
// console.log(binarySearchRecursive([8], 8 ))    //TRUE