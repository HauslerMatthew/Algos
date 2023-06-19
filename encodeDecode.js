// “You are given a string that may contain sequences of consecutive characters. 
// Create a function to shorten a string by including the character, 
// then the number of times it appears. 
// For "aaaabbcddd", return "a4b2c1d3". 

// If result is not shorter (such as "bb"=>"b2"), return the original string.” 

function encodeString(str){
    let count = 1; //count value that will add the final "number" to string
    let outputletter = str[0];  
    let output = "";
    for(var i = 0; i< str.length; i++){
        if(str[i] == str[i+1]){
            count +=1; //if letters repeat, we get total number of that letter
        }
        else{
            output += `${outputletter}${count}`;  //add the letter and total count (can be "1")
            outputletter = str[i+1]; //increment to the next unique letter
            count = 1; //reset count
        }
    }
    if(str.length <= output.length) { //if total output is longer or same length of input string, just output string
        return str;
    }
    return output;
}

// Decode this result by returning the original string as well.

//found a built-in to verify that the numbers within a string are integers (Number.isInteger()),
//used this to dictate if the character just pushes into new output string, or loops by adding the previous letter

const decodeString = str => {
    let output = "";
    for(var i=0;i<str.length;i++){ //iterate the string
        var tmp = str[i]; //tmp is our character (a letter or a number)
        if(Number.isInteger(parseInt(tmp))){ //if a number, execute below
            var letter = str[i-1]; //store the letter that precedes the number
            var block = ""; //set/reset our block of letters 
            if (Number.isInteger(parseInt(letter))){
                console.log("please use the format a1b2c3, your sequence contains back to back numbers")
                return null; //error handler if string isnt right format.
            }
            for(var j=0;j<tmp-1;j++){ 
                block += letter; //add the letter value to the block based on number - 1 (because the first instance of the letter is already added to output)
            }
            output += block; //once the full block is captured, add it to output
        }
        else {
            output += str[i]; //if not a number, add the character to the output
        }
    }
    return output;
}

console.log(e = encodeString("aaabbbbbccdddeee")); //"a3b5c2d3e3"
console.log(encodeString("bcdeeeeeeee")); 
console.log(encodeString("bbccd")); 
console.log(encodeString("bbb")); 
console.log(decodeString(e));
console.log(decodeString("a23"));