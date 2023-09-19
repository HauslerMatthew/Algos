function convertToDecimalHours(timeStrings) {
    const decimalHoursArray = [];

    for (const timeString of timeStrings) {
        const match = timeString.match(/(\d+)h(?: (\d+)m)?/);

        if (match) {
            const hours = parseInt(match[1]);
            const minutes = match[2] ? parseInt(match[2]) : 0;
            const decimalHours = hours + minutes / 60;
            decimalHoursArray.push(decimalHours);
        } else {
            console.log(`Invalid time format: ${timeString}`);
            decimalHoursArray.push(null); // Add null for invalid entries
        }
    }

    return decimalHoursArray;
}

const timeStrings = ['1h 30m','1h','0h 30m','1h','1h','2h','2h','0h 30m','2h','1h 30m','2h','1h','1h','1h','1h','2h','2h','2h','2h','2h','2h','1h','2h','1h 30m'];
const decimalHours = convertToDecimalHours(timeStrings);

console.log(JSON.stringify(decimalHours));
