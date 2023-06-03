//Giveaway winner function I wrote using ES6 syntax
//used this for selecting a random number that corresponds to a twitter follower who retweeted me

// Select a random number between 1 and {number of contestants entered}
// Apply a second standard to roll random number infinitely until the same value occurs back to back.


const giveawayWinner = (x) => {
    var arr = [];
    for (var i = 0; i < Infinity; i++) {
        arr.push(Math.ceil(Math.random() * x));
        if (arr[i - 1] == arr[i]) {
            console.log(arr[i])
            break
        }
    }
}

giveawayWinner(30);

// Apply a third standard that no winner is accepted unless the function rolls 50+ times. 

const giveawayWinner2 = (x) => {
    var arr = [];
    for (var i = 0; i < Infinity; i++) {
        arr.push(Math.ceil(Math.random() * x));
        if (arr[i - 1] == arr[i]) {
            console.log("Number Chosen: "+arr[i])
            console.log("Number of times ran: "+arr.length) //logging arr length once the back-to-back number is found.
            if (arr.length < 50) {
                giveawayWinner2(x); //using recursive function to run again if arr.length is less than 50 times. 
            }
            break
        }
    }
}

//giveawayWinner2(100); //likely to pass after one try
giveawayWinner2 (20); //likely takes multiple tries