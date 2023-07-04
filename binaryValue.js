// https://medium.com/@LindaVivah/learn-how-to-read-binary-in-5-minutes-dac1feb991e


//create a function that accepts a string that represents a binary number (ex: 1011001), and it returns the decimal number equivalent 

function binary(num){
    let length = num.length, exponent = 0, total = 0;
    for (var i = length - 1; i >= 0; i--){
        if (num[i] == 0){
            exponent++;
        }else if (num[i] == 1){
            total += (2**exponent); //2 to the exponent power syntax (one * is just multiplication)
            exponent++;
        }else{
            return "This is not a binary number";
        }
    }
    return total;
}

console.log(binary('1011001')); //should return 89.
console.log(binary('20000001')); //should return not binary.
console.log(binary('00000100'));
console.log(binary('11111111'));