// 1) Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).

// Let's use the JS Math Library!

// Generates a random number between 0 and 1 (not including 1)
var something = Math.random();
console.log(something);

// To get specific range of numbers, try multiplying the random number by the desired high number:
var another = Math.random() * 6;
console.log(another);

// To get the number you are actually looking for, try rounding!
// Math.ceil( x ) will round up x:
var again = Math.ceil( Math.random() * 6 );
console.log(again);

// Another way of doing it: CUT OFF the decimal and add 1
// To cut off decimals (no rounding) use Math.trunc( x )
// To get from 0-5 to 1-6, add 1
var hello = Math.trunc( Math.random() * 6 ) + 1;
console.log(hello);

// Let's turn it into a function:
function rollOne() {
    return Math.ceil( Math.random() * 6 );
}

// Let's console log the function call to see the return value:
console.log( rollOne() );

// What if we wanted to be able to specify how many sides the die has?
// Let's turn it into a function:
function rollAnother(sides) {
    return Math.ceil( Math.random() * sides );
}

// Let's console log the function call to see the return value:
console.log( rollAnother(20) );

// Second, create a function playFives(num), which should call rollOne() multiple times –
// ‘num' times, in fact, where 'num' is input parameter to playFives(num). Each time, it should
// print the value rollOne() returns, and if that return value is 5, also print “That’s good luck!”
function rollOne() {
    return Math.ceil( Math.random() * 6 );
}

function playFives(input_rolls) {
    for(var i = 1 ; i <= input_rolls ; i++) { //for loop to "roll" the number of times specified in the function
        var single_roll = rollOne();
        console.log(single_roll); //log value of each roll
        if(single_roll == 5) {
            console.log("That's good luck!"); //add the phrase with an if statement
        }
    }
}

playFives(10);


// 3) Third, create a new function named playStatistics(), which should call rollOne() eight
// times (but not print anything after each call). After the last of these eight calls, it should print out the lowest and highest values that it received from rollOne, among those eight calls.
// aka, min and max!

function rollOne() {
    return Math.ceil( Math.random() * 6 );
}

function playStatistics() {
    var highest = 0; //create vars outside the loop or else they will reset each time. 
    var lowest = 7;
    for(var i=1; i<=8; i++) {
        var single_roll = rollOne()
        //console.log("test value "+single_roll); // using this to verify outputs
        if(single_roll > highest) {
            highest = single_roll;
        }
        if(single_roll < lowest) {
            lowest = single_roll;
        }
    }
    console.log ("Highest = "+highest+", Lowest = "+lowest);
}

playStatistics();

// 4) Fourth, make a copy of playStatistics and add code to make playStatistics2(), so
// that at the end (in addition to printing high/low rolls), it also prints the total sum of all eight rolls.

function rollOne() {
    return Math.ceil( Math.random() * 6 );
}

function playStatistics2() {
    var highest = 0; //create vars outside the loop or else they will reset each time. 
    var lowest = 7;
    var sum = 0;
    for(var i=1; i<=8; i++) {
        var single_roll = rollOne()
        //console.log("test value "+single_roll); // using this to verify outputs
        sum += single_roll; //add results of single roll to sum variable each time. 
        if(single_roll > highest) {
            highest = single_roll;
        }
        if(single_roll < lowest) {
            lowest = single_roll;
        }
    }
    console.log ("Highest = "+highest+", Lowest = "+lowest+", Total sum = "+sum);
}

playStatistics2();

// 5) Fifth, copy playStatistics2 and add code to it to make playStatistics3(num), so that
// it will roll as many times as you want, instead of always doing this eight times.

function rollOne() {
    return Math.ceil( Math.random() * 6 );
}

function playStatistics3(x) {
    var highest = 0; //create vars outside the loop or else they will reset each time. 
    var lowest = 7;
    var sum = 0;
    for(var i=1; i<=x; i++) {
        var single_roll = rollOne()
        console.log("test value "+single_roll); // using this to verify outputs
        sum += single_roll; //add results of single roll to sum variable each time. 
        if(single_roll > highest) {
            highest = single_roll;
        }
        if(single_roll < lowest) {
            lowest = single_roll;
        }
    }
    console.log ("Highest = "+highest+", Lowest = "+lowest+", Total sum = "+sum);
}

playStatistics3(3);

// 6) Finally, make a copy of playStatistics3 and change it to create playStatistics4(num),
// so that at the end instead of the total sum, it prints the average roll.

function rollOne() {
    return Math.ceil( Math.random() * 6 );
}

function playStatistics4(x) {
    var highest = 0; //create vars outside the loop or else they will reset each time. 
    var lowest = 7;
    var sum = 0;
    for(var i=1; i<=x; i++) {
        var single_roll = rollOne()
        console.log("test value "+single_roll); // using this to verify outputs
        sum += single_roll; //add results of single roll to sum variable each time. 
        if(single_roll > highest) {
            highest = single_roll;
        }
        if(single_roll < lowest) {
            lowest = single_roll;
        }
    }
    console.log ("Highest = "+highest+", Lowest = "+lowest+", Average = "+Math.round(sum/x));
}

playStatistics4(10);

// Statistics Until Doubles
// Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly returns
// integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row. Display number of rolls, min, max, and average.

function statDoubles() {
    var arr=[]; //will need to capture values in an array, then roll until we get the same values back to back.

    //roll until the same value is hit back-to-back
    for(var i=0; i<Infinity; i++){
    arr.push(Math.ceil( Math.random() * 20 )); //place each result in an array, push so we move up a position after each roll.
        if(arr[i-1] == arr[i]){ //check if the previous roll matches the current one. 
            break; //end loop if so
        }
    } 
    console.log("Number of rolls = "+arr.length) //the arrays length will = our number of rolls

    //now we can review the array for its "stats" - start each value at the first position on the array and make an average 0. 
    var min=arr[0];
    var max=arr[0];
    var avg=0

    //review each value in the array
    for(var i=0; i<arr.length; i++){
        //if the value at current position is less than our first value, change it to current value, then repeat from there. (same with max)
        if(arr[i]<min){
            min=arr[i];
        }
        if(arr[i]>max){
            max=arr[i];
        }
        //add up all values together to later calculate average
        avg += arr[i];
    }
    //calculate average
    avg = Math.round(avg/arr.length);
    console.log("Max = "+max);
    console.log("Min = "+min);
    console.log("Avg = "+avg);
}

statDoubles();