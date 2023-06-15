// Given a sequence of integers as an array, determine whether 
// it is possible to obtain a strictly increasing sequence by 
// removing no more than one element from the array.

function almostIncreasingSequence(arr) {
    counter = 0;
    max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] <= max) {
            counter++;
            console.log("Counter is: " + counter);
            if (counter > 1) {
                return false;
            }
        }
        else {
            max = arr[i];
            console.log("Max is: " + max);
        }
    }
    return true;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])); // False
console.log(almostIncreasingSequence([1, 2, 3, 4, 1, 4, 7])); // False
console.log(almostIncreasingSequence([1,2,3,1,4,5,6,7,8,5,9,10])); //false - counter hits 2 in each test case
console.log(almostIncreasingSequence([1, 3, 2, 4])); //true, can remove 3

//---------------------------------------------------------------------------------

const almostIncreasingSequence = (arr = []) => { //arg is defined as blank but can be overriden in function call
    if (isIncreasingSequence(arr)) { //if array is only increasing, return true, otherwise start the for loop
        return true;
    }
    for (let i = 0; i < arr.length > 0; i++) {
        let copy = arr.slice(0); //creates new array (with original values)
        copy.splice(i, 1); //removes one value at index i from the copy
        if (isIncreasingSequence(copy)) { //then checks again if sequence is increasing
            return true;
        };
    };
    return false; //returns false if every iteration of one removed value from the array has returned false
};

const isIncreasingSequence = (arr = []) => { //checks if array is only increasing
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false;
        };
    };
    return true;
};

console.log(almostIncreasingSequence([])); //doesnt run for loop for isIncreasingSequence so just passes true
console.log(almostIncreasingSequence([1, 3, 2, 1])); // False
console.log(almostIncreasingSequence([1, 2, 3, 4, 1, 4, 7])); // False
console.log(almostIncreasingSequence([1, 3, 2, 4]));  //True

//-------------------------------------------------------------------

function almostIncreasingSequence(seq) {
    let count= 0;
    for(let i =1; i<seq.length;i++){// Loop through the array starting a the 1 index since we have to compare the current to the previous index
        if(seq[i]<=seq[i-1]){//if value that came before current is less than the current, increase the counter
            count++;
            seq.splice(i,1);
            i--
            if(count>1){// when the count is higher than 1 return false
                return false;
            }
        }
    }
    return true;
}
  console.log(almostIncreasingSequence([1, 3, 2, 3, 4 ])) // False
  console.log(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 4, 6])) // False