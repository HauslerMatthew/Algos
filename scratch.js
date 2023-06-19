const reverse = x => {
    const limit = 2147483648; //this is 2**31
    const k = x < 0 ? -1 : 1; //if x is less than zero, it will be multiplied by -1 in the return statement
    const n = Number(String(Math.abs(x)).split('').reverse().join('')); //n is the number of the string of the absolute value of x, reversed
    return n > limit ? 0 : n * k; //return n, if its greater than 2**31, return 0, otherwise, return the value of the n times k
};

//var k is going to hold a value of -1 or 1, depending on the value of x...
//ternary operator is structured like so...
//  expression ? result if true : result otherwise

// console.log(reverse(123234));

const Oneto255 = () => {
    for (let i = 1; i<256; i++){
        console.log(i);
    }
}

// Oneto255();

const sumTo255 = () => {
    let total = 0;
    for (let i = 0; i<256; i++){
        console.log(i);
        total += i;
        console.log("the total sum so far is: " + total);
    }
}

// sumTo255();

const printMax = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}

// printMax([1,2,3,4,5,6,7]);
// printMax([-1,-2,-3,-4,-5,-6,-7]);
// printMax([56, 95, 1000000, 10, 15]);

const odds = () => {
    for (let i = 1; i<256; i+=2){
        console.log(i);
    }
}

// odds();

const oddsV2 = () => {
    for (let i = 1; i<256; i++){
        if(i%2 == 1){
            console.log(i);
        }
    }
}

// oddsV2();

const arrOdd = () => {
    let arr = [];
    for (let i = 1; i<256; i+=2){
        arr.push(i);
    }
    console.log(arr);
}

// arrOdd();

const greaterThanY = (arr, y) => {
    let count = 0;
    for (let i = 0; i<arr.length; i++){
        if (arr[i] > y){
            count += 1;
        }
    }
    console.log(count);
}

// greaterThanY([3,5,18,21,19,1,0], 19);

const maxMinAve = (arr) => {
    let max = arr[0];
    let min = arr[0];
    let totalSum = 0;
    let avgCalc = arr.length;
    for(let i=0;i<avgCalc;i++){
        totalSum += arr[i];
        if (arr[i]>max){
            max=arr[i];
        }
        if (arr[i]<min){
            min=arr[i];
        }
    }
    let avg = totalSum/avgCalc;
    console.log("the max is: " + max);
    console.log("the min is: " + min);
    console.log("the average is: " + avg);
}

// maxMinAve([1,2,3,4,5,6,7,8]);
// maxMinAve([5,21,-50,7,81,29,42]);

const swap = (arr) => {
    for(let i=0;i<arr.length;i++){
        if (arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    console.log(arr);
}

// swap([1,-1,2,3,-3]);