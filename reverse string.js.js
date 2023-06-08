//write a function that reverses a string
//i.e. "abcde" -> "edcba"

function reverseString(input){
    var output='';
    for (var i = input.length - 1; i >= 0; i--) {
        output += input[i];
    }
    return output;
}

console.log(reverseString("magic the gathering"));

//"input" - length = number of characters so i starts at last character, and remember when you index a string, you start at 0 and go up 1 per character.
//i.e. input = "woah"
// w - 0, o - 1, a - 2, h - 3
//output = '' + h
//output = 'h' + a
//output = 'ha' + o
//output = 'hao' + w
//loop terminates at i=-1, your output is returned equal to "haow"