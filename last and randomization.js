// Array: Concat
// Replicate JavaScript’s concat() function. Create a standalone function that accepts two arrays. Return a new
// array containing the first array’s elements, followed by the second array’s elements. Do not alter the
// original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

var str1 = [1, 2, 3];
var str2 = [4, 5, 6];
console.log(str1.concat(str2));


function concat(arr, arr1) {
    var newArr = [];

    for (var i=0; i<arr.length; i++) {
        newArr.push(arr[i]);
    }

    for (var i=0; i<arr1.length; i++) {
        newArr.push(arr1[i]);
    }

    return newArr;
} 

console.log(concat([1, 2, 3], [4, 5, 6]));


// Array: Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any
// elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5],
// change it to [1,4,2,3,5] and return it. As always, do this without using any built-in functions.

function minToFront(arr){
    var min = arr[0];
    for(var i=0; i<arr.length; i++){ //this loop will iterate through the array and capture the lowest value (and its original position).
        if(arr[i]<min){
            min = arr[i];
            index = i;
        }
    }
    var arr1=[];
    arr1.push(min) //push the minimum value into our new array first
    for(var i=0; i<arr.length; i++){
        if(i!=index){
            arr1.push(arr[i]); //push all remaining values from original array into new one, skipping the min position
        }
    }
    console.log(arr1);
    return (arr1);
}

minToFront([5,4,1,2,3]);

//same challenge, but ALTER the original array

function minToFront(arr) {
    var min = arr[0];
    var minIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }

    for (var i = minIndex; i > 0; i--) {
        arr[i] = arr[i - 1]
    }

    arr[0] = min;
    return arr;
}


console.log(minToFront([2,3,4,1,5,6]));




// BONUS:
// Array: Shuffle
// In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method
// that will randomize the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a
// given array’s values. Work in-place, naturally. Do you need to return anything from your function?

function shuffle(arr)  {
    for(var i = arr.length-1; i>0; i--) {
        var j = Math.floor(Math.random() * (i+1)); //j index becomes a random number between 0 and X (the last position in the array (includes 0 as this is array positions)). as we incriment down, this number at most will be the current position
        var temp = arr[i]; //log current position value
        arr[i]=arr[j]; //change current position value to randomly selected position value (j)
        arr[j]=temp; //randomly selected position value then becomes what the current position was (swap them)
    }
    return arr;
}

console.log(shuffle([1,2,3,4])); 

console.log(shuffle([1,1,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,9,9,9,9,10,10,10,10,11,11,11,12,12,13,14,14,14,14,15,15,15,15,16,17,17]));

console.log(shuffle(["welcome","to","the","jungle","we","got", "fun","and", "games"]));

//quick easy way but not totally random:
array.sort((a,b) => 0.5 - Math.random());


console.log([1,2,3,4].sort((a,b) => 0.5 - Math.random()));