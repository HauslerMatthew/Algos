//create a function that accepts a nested array, and outputs all posibble combinations from array values into an array.

let x = [
    ["the"],
    ["quick", "lazy"],
    ["brown", "grey", "orange"],
    ["fox", "dog"]
    // ["jumped", "crouched"],
    // ["over", "under"],
    // ["the"],
    // ["fence", "moon", "bootcamp"]
]

// function outputs: ["quick brown fox", "quick brown dog",  ... "lazy orange dog"]

const qBF = (arr, output = [], position = 0, partial = '') => {
    if (position == arr.length) {
        output.push(partial);
    }
    else {
        for (var i = 0; i < arr[position].length; i++) {
            qBF(arr, output, position + 1, partial + arr[position][i] + " ");
        }
        return output;
    }
}

console.log(qBF(x));

//alt version ------------------------------------------------------------------------

function allcombs(words) {
    let results = [];
    function helper(comb, i) {
        //this base case means that we have gotten one word from each array
        if (i == words.length) {
            results.push(comb)
        }
        else {
            for (var j = 0; j < words[i].length; j++) {
                helper(comb + words[i][j] + " ", i + 1)
            }
        }
    }
    helper("", 0)
    return results
}

console.log(allcombs(x))


//From ChatGPT: "write me a js function that outputs "the quick brown fox" but in random order per word, and outputs all possible combinations."

function randomWordOrder() {
    const phrase = "the quick brown fox";
    const words = phrase.split(" ");
    const combinations = [];

    function generateCombinations(current, remaining) {
        if (remaining.length === 0) {
            combinations.push(current.join(" "));
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const word = remaining[i];
            const remainingWords = remaining.slice(0, i).concat(remaining.slice(i + 1));
            generateCombinations(current.concat(word), remainingWords);
        }
    }

    generateCombinations([], words);
    return combinations;
}

// Usage
const allCombinations = randomWordOrder();
console.log(allCombinations.join("\n"));