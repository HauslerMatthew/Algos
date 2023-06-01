// Generate Coin Change
// Change is inevitable (especially when breaking a
// twenty). Make generateCoinChange(cents).
// Accept a number of American cents, compute
// and print how to represent that amount with
// smallest number of coins. Common American
// coins are pennies (1 cent), nickels (5 cents),
// dimes (10 cents), and quarters (25 cents).

// Example output, given (94):
// 94 cents can be represented by:
// quarters: 3
// dimes: 1
// nickels: 1
// pennies: 4

// What would you do in front of a register to make change?
// Write the pseudocode!

// 34 cents. 
//1 - quarter - 25
//   9 cents
//1 - nickel - 5
//   4 cents
//4 - penny 


function generateCoinChange(cents){
var dollarCount = 0;
var halfCount = 0;
var quarterCount = 0;
var dimeCount = 0;
var nickelCount = 0;
var pennyCount = 0;
    while(cents>=100){
        cents-=100; //remove the dollar (100 cents) from input cents. 
        dollarCount++; //log that one dollar was added as "change" -- repeat for all other denominations
    }
    while(cents>=50){
        cents-=50;
        halfCount++;
    }
    while(cents>=25){
        cents-=25;
        quarterCount++;
    }
    while(cents>=10){
        cents-=10;
        dimeCount++;
    }
    while(cents>=5){
        cents-=5;
        nickelCount++;
    }
    while(cents>=1){
        cents-=1;
        pennyCount++;
    }
    console.log("dollar: "+dollarCount+", half dollar: "+halfCount+", quarters: "+quarterCount+", dime: "+dimeCount+", nickel: "+nickelCount+", penny: "+pennyCount)
    return dollarCount, halfCount, quarterCount, dimeCount, nickelCount, pennyCount
}

generateCoinChange(25);
generateCoinChange(41);
generateCoinChange(74);
generateCoinChange(93);

var num = 3.72;
console.log(Math.floor(num)); //always round down
console.log(Math.ceil(num)); //always round up
console.log(Math.trunc(num)); //always chop off decimals


//simple answer

var cents = 93; 
var q=Math.trunc(cents/25); //divide cents by 25 = 3.72, truncate to get value 3 (number of quarters produced in whole)
cents=cents%25; //take existing cents variable and modulus 25 - i.e. 93/25 = 3.72 - 3 = 0.72 x 25 = 18 (new cents value)
var d=Math.trunc(cents/10); //repeat for all other numerations
cents=cents%10;
var n=Math.trunc(cents/5);
cents=cents%5;
var p=cents;
console.log("Q:",q,"D:",d,"N:",n,"P:",p);