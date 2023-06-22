var myString = "this is a test."

const stringToArray = str => str.split(" ");

console.log(stringToArray(myString));

const reverseStringToArray = str => str.split(" ").reverse();

console.log(reverseStringToArray(myString));


// recreate the functions above using long methods (no built-ins)

function stringToWordArray(stringInput){
    let result = [];
    let word = '';
    for (var i=0;i<stringInput.length;i++){
        if (stringInput[i] != " "){
            word += stringInput[i]; //add each "letter" to word until you encounter a space character
        }
        else if (stringInput[i] == " "){
            result.push(word); //once you have hit a space, add the word to the result array
            word = "" //then reset the word value to nothing and start adding again
        }
    }
    result.push(word); //need this to push the last word (before sentence has ended) to array.
    return result;
}
console.log(stringToWordArray(""));
console.log(stringToWordArray("Hello there, how are you?"));

function stringToWordArrayReverse(stringInput){
    let result = [];
    let word = '';
    for (var i=0;i<stringInput.length;i++){
        if (stringInput[i] != " "){
            word += stringInput[i]; //add each "letter" to word until you encounter a space character
        }
        else if (stringInput[i] == " "){
            result.push(word); //once you have hit a space, add the word to the result array
            word = "" //then reset the word value to nothing and start adding again
        }
    }
    result.push(word); //need this to push the last word (before sentence has ended) to array.
    result.reverse();
    return result;
}

console.log(stringToWordArrayReverse("Hello there, how are you?"));