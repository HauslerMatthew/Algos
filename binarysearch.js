function binarySearch(input, target){
    var center_index = Math.ceil((input.length/2)-1)
    if (target == input[center_index]){
        return true
    }
    else if (target > input[center_index]){
        var newInput = input.slice(center_index+1)
        return binarySearch(newInput, target)
    }
    else if (target < input[center_index]){
        var newInput = input.slice(0, center_index)
        return binarySearch(newInput, target)
    }
    return false
}


console.log(binarySearch([1, 3, 5, 8, 9], 5));

//-----------------------------------------------------------------------

function binarySearch(x, arr){
    mid = Math.floor(arr.length/2);

    if (x > arr[arr.length-1] || x < arr[0]){
        return false;
    }
    if (x == arr[mid]) {
        return true;
    }
    if (arr[mid] > x){
        arr_copy = arr.slice(0, mid);
        return binarySearch(x,arr_copy);
    }
    if (arr[mid] < x){
        arr_copy = arr.slice(mid, arr.length);
        return binarySearch(x, arr_copy);
    }
    return false;
}
my_arr = [1, 3, 5, 8, 9];
console.log(binarySearch(5, my_arr));


// create a recursive function to find a target in an array at O(log n) instead of 0(n)
// sorted! input matters.
// the function recalls itself once. 
// could have other inputs besides array and target. 
// no for loop (thats 0(n)).
// do we need to shorten the array (split it out, delete one or parts of it?)

//binarySearch([1,2,3,4,5] 4) -> return true


