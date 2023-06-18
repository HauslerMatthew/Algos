// “String: Dedupe
// Remove duplicate characters (case-sensitive) including punctuation. Keep only the last instance of each character. Given "Snaps! crackles! pops!", return "Snrackle ops!".
//  ”

// use splice and includes methods 

const dedupeChars = (stringInput) => {
    let tempArr = [];
    //loop through the stringInput and push each character into the tempArr. if the character already exists in the tempArr, then remove the existing character, and push the new/latest instance of that character into tempArr
    for (var i = 0; i < stringInput.length; i++) { //top loop looks at each character and pushes into array
        if (tempArr.includes(stringInput[i])) { //if character exists / = true
            for (var j = 0; j < tempArr.length; j++) { //nested loop runs through the temp arr until it finds the matching value
                if (tempArr[j] == stringInput[i]) {
                    tempArr.splice(j, 1) //removes previous character
                }
            }
        }
        tempArr.push(stringInput[i]) //pushes value into array, if its new or if it already exists, its removed and then fed at the back. 
        //console.log(tempArr);
    }
    let resultString = ""
    for (let x in tempArr) {
        resultString += tempArr[x] //we iterate through the temp arr and push each value into our new string
    }
    return resultString
}


console.log(dedupeChars("Snaps! crackles! pops!"));
console.log(dedupeChars("Hello and good morning, welcome to the show!"));


