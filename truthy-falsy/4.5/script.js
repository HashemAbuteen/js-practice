function isLeapYear(year) {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`It is indeed a leap year for the year ${year}`);
    } else {
        console.log(`This is not a leap year for the year ${year}`);
    }
}

isLeapYear(2000); // Output: "It is indeed a leap year for the year 2000"
isLeapYear(2100); // Output: "This is not a leap year for the year 2100"



