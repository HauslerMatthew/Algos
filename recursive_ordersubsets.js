// inOrderSubsets(str, ... ?)
// return all strings you could make with the characters from the given string, in the order that they're presented
// (output order doesn't matter)
// "abc" -> ["", "c", "b", "bc", "a", "ac", "ab", "abc"]
// "zhk" -> ["", "z", "h", "k", "hk", "zh", "zk", "zhk"] (8)
// "tkps" -> ["", "t", "k", "p", "s", "tk", "tp", "ts", "kp", "ks", "ps", "tkp", "tks", "tps", "kps", "tkps"] (16)
// 2^n output elements


function inOrderSubsets(input, partial = '', position = 0, output = []) { //defined arguments, so we're only providing the input
    if (position == input.length) {  //since our function is recursive, this will eventually terminate it and push in the held partial value
        output.push(partial);
    }
    else {
        inOrderSubsets(input, partial + input[position], position + 1, output);
        inOrderSubsets(input, partial + '', position + 1, output);
        return output;
    }
}

console.log(inOrderSubsets('abc'));
//console.log(inOrderSubsets(''));

//-------------------------------------------------------------------------------

function inOrderSubsetsV2(str, solutions = [], partial = "") {
    solutions.push(partial);

    for (let i = 0; i < str.length; i++) {
        const sliced = str.slice(i + 1);
        inOrderSubsetsV2(sliced, solutions, partial + str[i]);
    }

    return solutions;
}

console.log(inOrderSubsetsV2("abcd"));

//-------------------------------------------------------------------------------

function inOrderSubsets(str, solutions = [], partial = "") {
    solutions.push(partial);

    for (let i = 0; i < str.length; i++) {
        const sliced = str.slice(i + 1);
        console.log("sliced", sliced);
        console.log("str[i]", str[i]);
        console.log(solutions);
        console.log('partial', partial)
        inOrderSubsets(sliced, solutions, partial + str[i]);
    }

    return solutions;
}

console.log(inOrderSubsets("abc").join(", "));