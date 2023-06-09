//check a string and determine if it is a true palindrome, including spaces and differences between uppercase/lowercase letters.

function isPalindrome(string) {
    var output = '';
    for (let i = string.length - 1; i >= 0; i--) {
        output += string[i];
    }
    if (output == string) {
        return true
    }
    return false
}


console.log(isPalindrome("hi"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Racecar"));
console.log(isPalindrome("Magic the GatheringgnirehtaG eht cigaM"));


//check a string and return the longest palindrome within it, if the whole string is a palindrome it should return the whole string, if the string is all unique characters, you should retrun at least one of those characters (either the start or the end of the string)
//i.e. "racecar" should output "racecar" / "hello" should output "ll" / "howdy" should return "h" or "y"

function longestPalindrome(input) {
    if (input.length == 0) { //if theres nothing in string return a blank string
        return "";
    }

    //var result = input[0]; //just in case we find nothing,like an input of "abc" -> would return "a"
    var result = input[input.length - 1] //alternate to find last letter instead, i.e. "abc" would return "c"

    for (var i = 0; i < input.length; i++) {
        left = 0;
        right = 0;
        //determine if we have a string of idential characters
        //i.e. a trivial palindrome
        while (input[i - 1 - left] == input[i]) {
            left++;
        }
        while (input[i + 1 + right] == input[i]) {
            right++;
        }
        //now check for non-trivial palindromes
        while (input[i - 1 - left] == input[i + 1 + right]) {
            if (input[i - 1 - left] === undefined && input[i + 1 + right] === undefined) {
                //special case here - entire string is a single-character palindrome
                //just return the input
                return input;
            }
            left++;
            right++;
        }
        //we have a potential longest palindrome -
        //check it against the current longest
        potential = input.slice(i - left, i + right + 1); //slice function (starting index to slice (everything to the left of this index gets removed), ending index (it and everything to the right of this index gets removed))
        if (potential.length > result.length) {
            result = potential;
        }
    }

    return result;
}

console.log(longestPalindrome('abacabd'));
console.log(longestPalindrome('abcde'));
console.log(longestPalindrome('ehggghd'));
console.log(longestPalindrome('qwertttreqwerewy'));
console.log(longestPalindrome('qwerttttreqwerewy'));
console.log(longestPalindrome('a'));
console.log(longestPalindrome('aaaa'));
console.log(longestPalindrome(''));