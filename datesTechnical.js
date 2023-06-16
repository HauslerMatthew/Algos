//Write a function findTheDate that accepts a day of the week and a number x, then returns the day of the week it would be x days from the provided day. 

function findTheDate(str, num) {
    var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; //array stores our days in order, index 0 through 6
    for (var i = 0; i < 7; i++) { //run loop until we find index of day provided in string
        if (str == days[i]) {
            var numIndex = (i + num) % 7; //add number to index, then find its modulo 7 to determine new index.  i.e. Tue = index 1, 1 + num (i.e. 2) = 3, 3%7 = 3
            return days[numIndex];
        }
    }
    return ("day not found, please use 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', or 'Sun'");
}

console.log(findTheDate('Tue', 7));

//similar to above, expand the function to tell full dates, x number of days from a provided date

function findDate(date, num) {
    var result = new Date(date);
    result.setDate(result.getDate() + num);
    return result.toString();
}

console.log(findDate("June 16, 2023", 50));

//Bonus, custom write a function to accept MM/DD/YYYY string and dont use any prebuild Date functions. 

function findDate(str, num) {
    var monthNumDays = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    } //object that stores month (1-12) as key and number of days as value
    var currentDay = parseInt(str.slice(3, 5)); //extracts the day value from the string and converts to integer. 
    var currentMonth = parseInt(str.slice(0, 2)); //"" Month ""
    var currentYear = parseInt(str.slice(6)); //"" Year ""
    //var monthCount = 0;
    var yearCount = 0;
    while (num > monthNumDays[currentMonth] - currentDay) { //this while statement increments our months based on number provided
        if (currentMonth == 12) { //corner case where the month provided is December (or we approach december based on number provided), return back to January and incriment year. 
            currentMonth = 1;
            //monthCount++;
            yearCount++;
        }
        else {
            currentMonth += 1;
            //monthCount++;
        }
        num -= (monthNumDays[currentMonth])
    }
    currentDay += num; //current day becomes remainder of days after incrimenting months (or immediately jumps here if range is still within same month)
    console.log("Current Date: " + currentMonth, currentDay, (currentYear + yearCount));
}

findDate("06/16/2023", 50);
findDate("06/16/2023", 350);
findDate("06/16/2023", 10);
