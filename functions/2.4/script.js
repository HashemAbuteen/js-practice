const today = new Date();
const day = today.getDay();
const date = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

let dayOfWeek;
switch (day) {
  case 0:
    dayOfWeek = 'Sunday';
    break;
  case 1:
    dayOfWeek = 'Monday';
    break;
  case 2:
    dayOfWeek = 'Tuesday';
    break;
  case 3:
    dayOfWeek = 'Wednesday';
    break;
  case 4:
    dayOfWeek = 'Thursday';
    break;
  case 5:
    dayOfWeek = 'Friday';
    break;
  case 6:
    dayOfWeek = 'Saturday';
    break;
}

let monthName;
switch (month) {
  case 0:
    monthName = 'January';
    break;
  case 1:
    monthName = 'February';
    break;
  case 2:
    monthName = 'March';
    break;
  case 3:
    monthName = 'April';
    break;
  case 4:
    monthName = 'May';
    break;
  case 5:
    monthName = 'June';
    break;
  case 6:
    monthName = 'July';
    break;
  case 7:
    monthName = 'August';
    break;
  case 8:
    monthName = 'September';
    break;
  case 9:
    monthName = 'October';
    break;
  case 10:
    monthName = 'November';
    break;
  case 11:
    monthName = 'December';
    break;
}

let dateString = `Today is ${dayOfWeek} the ${date}`;
if (date === 1 || date === 21 || date === 31) {
  dateString += 'st';
} else if (date === 2 || date === 22) {
  dateString += 'nd';
} else if (date === 3 || date === 23) {
  dateString += 'rd';
} else {
  dateString += 'th';
}
dateString += ` of ${monthName} ${year}`;

console.log(dateString); // "Today is Monday the 31st of January 2021"
