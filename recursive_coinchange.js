
// recursiveCoinChange(input, solutions = [], partial = {'quarters': 0, 'dimes': 0, 'nickels': 0, 'pennies': 0}) (not the only set of arguments you could use)

// 137 - 1 dollar, 37 cents
// return an array containing all possible collections of coins you could use to represent your given input value
// output is an array of objects in the format {'quarters': 0, 'dimes': 0, 'nickels': 0, 'pennies': 0}
// if input is 7, output is:
// [
// {'quarters': 0, 'dimes': 0, 'nickels': 1, 'pennies': 2}
// {'quarters': 0, 'dimes': 0, 'nickels': 0, 'pennies': 7}
// ]
// if input is 21, output is:
// [
// {'quarters': 0, 'dimes': 2, 'nickels': 0, 'pennies': 1},
// {'quarters': 0, 'dimes': 1, 'nickels': 2, 'pennies': 1},
// {'quarters': 0, 'dimes': 1, 'nickels': 1, 'pennies': 6},
// {'quarters': 0, 'dimes': 1, 'nickels': 0, 'pennies': 11},
// {'quarters': 0, 'dimes': 0, 'nickels': 4, 'pennies': 1},
// {'quarters': 0, 'dimes': 0, 'nickels': 3, 'pennies': 6}, ...
// {'quarters': 0, 'dimes': 0, 'nickels': 0, 'pennies': 21}
// ]

function generateCoinChange(input, solutions = [], partial = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }) {
    solutionCopy = Object.assign({}, partial)
    solutionCopy['pennies'] = input
    solutions.push(solutionCopy);

    if (!partial.quarters) { //same syntax as partial['quarters'] == 0
        const maxQuarters = Math.floor(input / 25);

        for (let i = 1; i <= maxQuarters; i++) {
            partialCopy = Object.assign({}, partial);
            partialCopy['quarters'] = i
            generateCoinChange(input - i * 25, solutions, partialCopy);
        }
    }

    if (!partial.dimes) {
        const maxDimes = Math.floor(input / 10);

        for (let i = 1; i <= maxDimes; i++) {
            partialCopy = Object.assign({}, partial);
            partialCopy['dimes'] = i
            generateCoinChange(input - i * 10, solutions, partialCopy);
        }
    }

    if (!partial.nickels) {
        const maxNickels = Math.floor(input / 5);

        for (let i = 1; i <= maxNickels; i++) {
            partialCopy = Object.assign({}, partial);
            partialCopy['nickels'] = i
            generateCoinChange(input - i * 5, solutions, partialCopy);
        }
    }

    return solutions;
}

x = generateCoinChange(31);
console.log(x);

//alternate version------------------------------------------------------------------------------------

function generateCoinChange(
    cents,
    solutions = [],
    partial = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }
) {
    solutions.push({
        ...partial, //same syntax as making an object copy of partial.
        pennies: cents //the corresponding updates you would apply to the copy. 
    }); //this yeilds our answer of using all pennies to match the input amount.  Once we start recurring, we'll be recurring values less than the input (based on using other coins added) but will still assign that remainder as pennies.

    if (!partial.quarters) {
        const maxQuarters = Math.floor(cents / 25);

        for (let i = 1; i <= maxQuarters; i++) {
            generateCoinChange(cents - i * 25, solutions, {
                ...partial,
                quarters: i
            });
        }
    }

    if (!partial.dimes) {
        const maxDimes = Math.floor(cents / 10);

        for (let i = 1; i <= maxDimes; i++) {
            generateCoinChange(cents - i * 10, solutions, {
                ...partial,
                dimes: i
            });
        }
    }

    if (!partial.nickels) {
        const maxNickels = Math.floor(cents / 5);

        for (let i = 1; i <= maxNickels; i++) {
            generateCoinChange(cents - i * 5, solutions, {
                ...partial,
                nickels: i
            });
        }
    }

    return solutions;
}

console.log(generateCoinChange(10));

//ChatGPT solution--------------------------------------------------------

function coinChange(amount, coins) {
    const combinations = [];

    function backtrack(current, remaining, start) {
        if (remaining === 0) {
            combinations.push([...current]);
            return;
        }

        for (let i = start; i < coins.length; i++) {
            if (coins[i] <= remaining) {
                current.push(coins[i]);
                backtrack(current, remaining - coins[i], i);
                current.pop();
            }
        }
    }

    backtrack([], amount, 0);
    return combinations;
}

// Usage
const amount = 31;  // Change amount in cents
const coins = [1, 5, 10, 25];  // Available coin denominations
const allCombinations = coinChange(amount, coins);
console.log(allCombinations);