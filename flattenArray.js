// given an array with a series of nested arrays, flatten the array so it has no nested arrays
//i.e.
function flatten(arr){return arr.flat(Infinity);} //flat built-in accepts a depth parameter (how deep to flatten the nested array), using infinity will flatten any input to one array
console.log(flatten([1,[2,3,[4,5]],6,7,[8]]));
//  [1,[2,3,[4]],5]  --->  [1,2,3,4,5]

//without built-in function (makes a new array)
function flattenRecursive(arr,result=[]){
    for(let i=0;i<arr.length;i++){ //loop through array
        const value=arr[i]; //capture value at each iteration
        if(Array.isArray(value)){ //if value is another array, recall the function using the new array and existing result array
            flattenRecursive(value, result);
        }
        else{
            result.push(value); //if value isnt array, just push into result
        }
    }
    return result;
}

console.log(flattenRecursive([1,[2,3,[4,5]],6,7,[8]]));

//using iterable 
//hint
console.log(typeof [1]);

function flattenIter(inputArr){
    let results = [];
    for(val of inputArr){
        if (typeof val == "object"){
            for(subVal of val){
                results.push(subVal);
            }
        } else {
            results.push(val);
        }
    }
    console.log(results);
    return results;
}

flattenIter([4,5,6,[4,5,65],4,87,[2,5,43]]);

