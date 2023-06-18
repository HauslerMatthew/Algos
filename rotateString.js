// Create a standalone function that accepts a string and an integer, 
//and rotates the characters in the string to the right by that amount. 
//Example: given ("Boris Godunov",5), you should return "dunovBoris Go".”

//MY Pseudocode

//take the last character, remove it, and move to front of string 
//repeat above x times (num)
//can do a function similar to pushFront, loop starts at end of string, removes last value into new temp variable, copies remaining string as new remaining variable, concats the temp to remaining as output variable.

//slightly faster version - just slice out the amount thats supposed to rotate to front, then similar to above
//create a Left var (the portion sliced out from the end of string that will move to front) and Right var (remaining string)
//Concat them 


const rotateString = (stringInput, num) => {
    let left = stringInput.slice(0, stringInput.length-num); //this works if num is max 2n (n=string length) because negative numbers with slice method start at back of the array and move in. 
    let right = stringInput.slice(stringInput.length-num);
    let result = right.concat(left);
    return result;
}

console.log(rotateString("Boris Godunov", 5)); //returns "dunovBoris Go"
console.log(rotateString("Boris Godunov", 27)); //returns "Boris Godunov" (doesnt start rotation again after any numbers greater than 2*(string.length))