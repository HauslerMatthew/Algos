// telephoneWords(str, ... ?)
// input is a string of digits -> '83461'
// output is an array of all 'words' representable by those digits on a telephone keypad
// 746124 -> ['PGM AG', 'RGO CH'...]

function telephoneWords(input, output = [], position = 0, partial = '', keypad = { 1: ' ', 2: 'ABC', 3: 'DEF', 4: 'GHI', 5: 'JKL', 6: 'MNO', 7: 'PQRS', 8: 'TUV', 9: 'WXYZ', 0: '.' }) { //args are defined so only need input
    if (position == input.length) { //length = number of digits
        // console.log("----------------------------------------------")
        // console.log("if passes! Position and input length = "+position);
        // console.log("partial = "+partial);
        // console.log("-----------partial pushes to output-----------");
        output.push(partial); //input the updated partial value once position matches length per function
    }
    else {
        for (var i = 0; i < keypad[input[position]].length; i++) { //loop for the object value at key x, where x is a digit from the input (key)
            // console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
            // console.log("i = " + i);
            // console.log("partial initial= " + partial);
            // console.log("partial after keypad= " + partial + keypad[input[position]][i]);
            // console.log("position = " + position);
            // console.log("output = " + output);
            // console.log("^^^^^^^^^^^new function starts from these values^^^^^^^^^^^");
            telephoneWords(input, output, position + 1, partial + keypad[input[position]][i]); //recur the function with new args, resolves once it meets if statement
        }
        return output;
    }
}

console.log(telephoneWords('23')); //we expect 9 total values in the output array, which get added in during each recurred function passes the if statement, then once the for loop closes we return it. 

//i.e. input of '23'
// input length = 2, doesnt equal inital postion of 0 so we start running the else statement
// for i=0;i<3(length of 'ABC');i++

//recur function with new args, view console to see how it changes per iteration