//divide number by 16. get the integer (floor) for the next iteration.  track the remainder per division. repeat until the quotient is 0

const convert2Hex = (num, hexString = '', hexvals = '0123456789ABCDEF') => {
    while (num > 0) {
        let bit = num % 16;
        hexString += hexvals[bit];
        num = Math.floor(num / 16);
    }
    hexString += 'x0' // hex always start with 0x 
    return hexString.split('').reverse().join(''); //reverse the order of the string (hexstring is 'C7x0' before the return statement)
}

console.log(convert2Hex(124)); //0x7C
console.log(convert2Hex(420));
console.log(convert2Hex(2000));
console.log(convert2Hex(98));


//given a value of 7C, should return 124.  using the hexvals, convert each bit to its decimal number and multiply by 16^n.  n is equal to its index position reversed. 
//ie. 7C, the "C" is decimal 12, multiplied by 16^0 = 12.  7 is multiplied by 16^1 = 112.  112 + 12 = 124

const convert2Dec = hexString => {
    const invalid = "Please provide a proper hexcode, ie. a series of numbers 0-9 &/or uppercase A-F";
    const hexVals = {"0": 0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "A":10, "B":11, "C":12, "D":13, "E":14, "F":15};
    let length = hexString.length, result = 0, exponent = 0;
    for (var i = length - 1; i >= 0; i--){
        result += hexVals[hexString[i]] * (16**exponent)
        exponent++
    }
    if(isNaN(result)){
        return invalid;
    }
    return result
}

console.log(convert2Dec('7c')) //invalid
console.log(convert2Dec('7C')) //124
console.log(convert2Dec('1A4')) //420
console.log(convert2Dec('7D0')) //2000
console.log(convert2Dec('62')) //98

function hex2dec(str){
    let exponentnum = 0;
    let hexChars = "0123456789ABCDEF";
    let total = 0;
    for(let i = str.length-1; i>=0; i--){
        let decversion = hexChars.indexOf(str[i]);
        let aftermultiply = decversion * 16**exponentnum;
        total += aftermultiply;
        exponentnum++
    }
    return total

}

console.log(hex2dec("1A4")) //420
