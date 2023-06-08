// parensValid(input_string) -> return true if parentheses in the input string are placed acceptably and false if not
// - ignore non-parentheses characters
// - advice: don't try to remove non-parentheses characters
// "()" -> true
// "(a(b)c)" -> true
// "(()))" -> false
// "((())" -> false
// "()((*)({))(((])))" -> true
// "abc" -> true
// "(abc" -> false
// ")(" -> false (hint - your alg should catch this first closed parenthesis right away and return false)

function parensValid(str){
    var validity = 0;
    for (var i = 0; i <= str.length; i++){
        if (str[i] == "("){
            validity++;
        }
        else if (str[i] == ")"){
            validity--;
            if (validity < 0){
                //console.log(i);
                return false;
            }
        }
        //if closedPar > openPar, return False
        
        // compare openPar with closedPar
        // if length is the same, return True. 
        // If length is not the same, return False
    }
    return validity == 0; //returns a boolean if validity = 0 after running through the string
}

console.log(parensValid("()((*)({))(((])))"));
console.log(parensValid(")("));
console.log(parensValid("((())"));
console.log(parensValid("())"));
//----------------------------------------



// bracesValid(input_string) - return true if all the braces in the string are valid *with respect to each other* - (), [], <> and {}
// - "()[]{}" -> true
// - "([]<>{}){[]}" -> true
// - "{[afdda}]" -> true (even though it looks bad)
// - "{[afdda}])" -> false
// - "{[(afdda}]" -> false
// - "([{]})" -> true (for now)

function isAllValid(input) {
    if(checkPar(input, "(", ")" != true)) {
        return false;
    }
    if(!(checkPar(input, "[", "]"))) {
        return false;
    }
    if(!(checkPar(input, "{", "}"))) {
        return false;
    }
    return true;
}

console.log(isAllValid("()[]{}"))
console.log(isAllValid("([]){{[()]}}"))
console.log(isAllValid("()[]}"))

function checkPar(str, left, right){
    var openPar = 0;
    var closedPar = 0;
    for (var i = 0; i <= str.length; i++){
        if (str[i] == left){
            openPar++;
        }
        else if (str[i] == right){
            closedPar++;
            if (closedPar > openPar){
                return false;
            }
        }
        //if closedPar > openPar, return False
        
        // compare openPar with closedPar
        // if length is the same, return True. 
        // If length is not the same, return False
    }
    if (openPar == closedPar){
        return true
    }
    return false
}