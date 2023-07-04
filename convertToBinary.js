//given a decimal number, convert it to binary.  25 outputs 11001
//your value > 0 divided by 2 will output a remainder of 1 or 0.  keep dividing the floored result by 2 until you get to 0, tracking the remainder per division.
//your remainder values from last to first will be your binary number. (concat)

const convertBinary = num => {
    let binaryString = '';
    while( num > 0 ) {
        let bit = num%2;
        binaryString += bit;
        num = Math.floor(num/2);
    }
    return binaryString.split('').reverse().join('');
}

console.log(convertBinary(25));
// console.log(convertBinary(9));
// console.log(convertBinary(100));
// console.log(convertBinary(120));
// console.log(convertBinary(255));