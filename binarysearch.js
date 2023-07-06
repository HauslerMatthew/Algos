
// create a recursive function to find a target in an array at O(log n) instead of 0(n)
// sorted! input matters.
// the function recalls itself once. 
// could have other inputs besides array and target. 
// no for loop (thats 0(n)).
// do we need to shorten the array (split it out, delete one or parts of it?)

//binarySearch([1,2,3,4,5] 4) -> return true

function binarySearch(input, target){
    //determine a middle point of the array
    //console.log(input);
    var center_index = Math.ceil((input.length/2)-1)

    //immediately return true if our target matches the input at the middle point
    if (target == input[center_index]){
        return true
    }

    //recall function if target isnt found (how can you shorten the array so that we operate at O(log n))?
    //if target is larger than middle point
    else if (target > input[center_index]){
        var newInput = input.slice(center_index+1)
        return binarySearch(newInput, target)
    }
    //if target is smaller than middle point
    else if (target < input[center_index]){
        var newInput = input.slice(0, center_index)
        return binarySearch(newInput, target)
    }
    //this is shortning array each time, and since it never iterrates it will work faster
    //at a certain point, our array will just be one value, and if not the target, will pass as empty which cant be read by the if statements and will return false
    return false
}


console.log(binarySearch([1, 3, 5, 8, 9], 5));
console.log(binarySearch([1, 3, 5, 8, 9], 2));

//----------------------------------v2-------------------------------------

function binarySearch(x, arr){
    mid = Math.floor(arr.length/2);
    //this version uses an additional logic if statement to quickly determine if the target cant possibly exist
    //i.e. is the target greater than the last value in the array OR is it less than the first value in array.
    //still only works with a sorted array
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



