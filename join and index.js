//joinArray function- given an array and a seperator (string), incorporate the seperator into a new string within the array values.
//i.e. ([1,2,3], "-") -> "1-2-3"
function joinArray(arr, sep) {
    var newString = "" //new variable to capture final output
    for (var i = 0; i < arr.length; i++) {
        newString += arr[i] //add in value of array
        if (i < arr.length - 1) {
            newString += sep //add in separator after (if not at last position on the array)
        }
    }
    console.log(newString)
}
joinArray([1, 2, 3, 4, 5], "-")


// python version:
// def join_list(input_list, seperator = ", "):
//     output = ""

//     for i in range(0, len(input_list) - 1):
//         output += input_list[i]
//         output += seperator

//     output += input_list[-1]

//     return output

// print(join_list(["a", "6", "&"], "~~~"))




//bookIndex function
//one parameter - given an array of numbers, create a string that returns the numbers with a - when concurrent, and separated by commas
//i.e. [1,2,3,4,58,59,60,252] -> "1-4, 58-60, 252"
function book_index(arr){
    index_str = "" //final output

    for (var i = 0; i < arr.length; i++) {
        tmp = arr[i]
        if (arr[i+1] != arr[i]+1){
            index_str += arr[i] //if the current value of the array doesnt equal itself plus 1 at the next value over, just add current value to final output)
        } 
        else{
            while (arr[i+1] == arr[i]+1) {
                i++ //if the current value does equal itself plus 1 at the next value, increment i up and go through the loop until it doesnt
            } 
            index_str+= tmp + "-" + arr[i] //after the "while" is no longer true, add the temp value (beginning position when loop starts), the separator, and then the current value
        }
        if (i != arr.length-1){
            index_str += ", " //if current position is not at the last position on the array, add the comma separator (this runs independently of the if/else above)
        }
    }
    return index_str;
}
console.log(book_index([1]))
console.log(book_index([1,2,3,7,8,22]))
console.log(book_index([1,2,3,7,8,22,24]))


//alternate solution with helper function
function bookIndex(input) {
    var stringarray = [];
    for (var i = 0; i < input.length; i++) {
        if (i + 1 == input.length) {
            stringarray.push(input[i].toString());
        } //last item, if solo, has no potential pair
        else if (input[i] + 1 != input[i + 1]) {
            stringarray.push(input[i].toString());
        } //item with non-adjacent neighbor gets dropped into array
        else {
            var left = input[i];
            var right = 0;
            while (input[i] + 1 == input[i + 1]) {
                right = input[i + 1]
                i++;
            }
            stringarray.push(left.toString() + "-" + right.toString())
        }
    }
    console.log(stringarray);
    return buildIndex(stringarray);
}

function buildIndex(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
        output += input[i];
        if (i != input.length - 1) {
            output += ", ";
        }
    }
    return output;
}

console.log(bookIndex([1, 3, 4, 5, 7, 8, 11]));
console.log(bookIndex([1, 2, 3, 4, 5]));
console.log(bookIndex([1, 3, 5, 11, 12, 13, 21, 22, 23, 24, 89, 255, 256, 257, 314]));