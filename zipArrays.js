// zipArrays(array1, array2)
// return an object with keys from array 1 and values from array 2
// (you can assume arrays are equal length and not empty)
// ['x', 'y', 'z'], [35, 81, 56] ->
// {x: 35, y: 81, z: 56}
// ['first', 'second'], [[45, 11], [53, 74]] ->
// {first: [45, 11], second: [53, 74]}

function zipArrays(array1, array2){
    output = {};
    for (var i = 0; i<array1.length; i++){
        output[array1[i]] = array2[i]; //add key/value pair to object, iterates through one array but can extract values from both
    }
    return output
}

console.log(zipArrays(["a"], [1]));
console.log(zipArrays(["a","b"], [1, 2]));




// invertHashTable(object)
// return a new object with inverted key/value pairs
// {a: b, x: y} -> {b: a, y: x}
// {a: 1, b: 2, c: 3} -> {1: a, 2: b, 3: c}

function invertHashTable(object){
    var keys = [];
    var values = [];
    for (var key in object) { //block to iterate through an object - this is where you instantiate the "Key" variable as well
        keys.push(key);
        values.push(object[key]);
    }
    return zipArrays(values, keys); //note this calls on the first function made to do the array into object method. Just make sure you reverse the logic so the Keys become new values, etc. 
}

console.log(invertHashTable({"a": "b", "x": "y"}));

//or a simplified version that doesnt need 2 functions:
function swapPairs(object){
    output = {}
    for (var key in object){ 
        output[object[key]] = key //at this line, the left variable is the key being created (due to how objects work) and the right variable is the value that will be associated with it. 
    }
    return output
}
console.log(swapPairs({"a": "b", "x": "y"}))