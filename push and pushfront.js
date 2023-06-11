// WARM-UP: Push
// Write a function that takes in an array as input and a number 
// Add that number to the end of the array without using .push()
// Example: push( [1,2] , 5 ) => [1,2,5]

// Your code here (pseudocode first if needed)
// need to know how long an array is (.length)
// create a temp value to store the number were pushing to the array


function push(arr, num){
    arr[arr.length]=num;
    console.log(arr);
}

push([1,2], 5);
push([1,2,3,5], 6);

// CHALLENGE: Array: Push Front
// Given array and an additional value, insert this
// value at the beginning of the array. Do this
// without using any built-in array methods. (no push, pop, etc)
// You can use length.
// Example: pushFront( [1,2] , 5 ) => [5,1,2]

// Your code here (pseudocode first if needed)

function pushFront(arr, num){
    for(var i=arr.length; i>=0;i--){
        if(i==0){
            arr[0]=num;
        }
        else{
            arr[i]=arr[i-1];
        }   
    }console.log(arr);
}

pushFront([1,2], 5);

