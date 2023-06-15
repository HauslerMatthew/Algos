// GIVEN AN ARRAY, RETURN ARRAY WITHOUT DUPES
// [1,2,1,3,4,2] => [1,2,3,4]

// CHALLENGE: RETURN SAME ARRAY

// console.log(removeDupe([1,2,1,3,4,2]))
// console.log(removeDupe([1,2,3]))

function removeDup(arr){ //new array
    return [...new Set(arr)] //spread operator (iterates values in array and extracts them out to individual elements), Set object stores unique values only
}
// console.log(removeDupe([1,2,1,3,4,2]))
// console.log(removeDupe([1,2,3]))
//console.log(removeDup([2,2,2,2,4534,5,7,3]));
console.log(removeDup(["mike","john","alex","mike","john"]));


function removeDupe(arr){ //new array
    var newarr=[]
    for(num in arr){//same logic as using an iterated for loop. 
        if(!newarr.includes(arr[num])){ 
            newarr.push(arr[num]) //push the value into new array if it doesnt exist
        }
    }
    return newarr;
}


console.log(removeDupe([1,2,1,3,4,2]));
console.log(removeDupe([1,2,3]));


function removeDupl(arr){ //new arr
    return arr.filter((value, index) => arr.indexOf(value) === index); //filter function allows you to provide params, then a conditional to pass the filter
} //so, value is the actual values in the array, index is an optional param that captures the index of each value.
//indexOf(value) returns the index of the value specified.


console.log(removeDupl([1,2,1,3,4,2]));
//as you iterate, it checks every value i.e. indexOf(1) returns 0 and 0===0 so it passes filter
//indexOf(2) returns 1 and 1===1
//indexOf(1) returns 0 and 0=/=2 so it doesnt pass filter.  this is how it removes dupes, it only captures index of the first occurence.
console.log(removeDupl([21,2,1,3,4,2]));


function RemoveDu(arr){ //same array challenge
    var obj={}; //new object just acts as a key to check on values of the array
    for(let i = 0; i<arr.length; i++){
        if(!obj[arr[i]]){ //if theres no key in the object that equals a value in the array
            obj[arr[i]]="exists"; //add it, with the value "Exists"
            //this will catch values that now exist as the loop iterates and they will skip this if statement if so, 
        }
        else{
            arr.splice(i,1); //...and get removed. i.e. 21 gets created, 2 gets created, index 5 (last i) = (2 /already exists) gets removed, only this gets removed ("1" in argument)
            i--; //i decriments to check the same index again as its now a new value
        }
    }
    return arr
}

console.log(RemoveDu([21,2,1,3,4,2])); //[ 21, 2, 1, 3, 4 ]

