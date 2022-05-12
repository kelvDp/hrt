/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock
 */

function timeConversion(time) {
  let input = time.split(":");
  let convertedTime = "";
  let indicator = input[2].substring(2);
  if (indicator === "AM" && parseInt(input[0]) !== 12) {
    convertedTime = input[0] + ":" + input[1] + ":" + input[2].substring(0, 2);
  } else if (indicator === "AM" && parseInt(input[0]) === 12) {
    convertedTime = "00" + ":" + input[1] + ":" + input[2].substring(0, 2);
  }
  if (indicator === "PM" && parseInt(input[0]) !== 12) {
    convertedTime =
      parseInt(input[0]) + 12 + ":" + input[1] + ":" + input[2].substring(0, 2);
  } else if (indicator === "PM" && parseInt(input[0]) === 12) {
    convertedTime = input[0] + ":" + input[1] + ":" + input[2].substring(0, 2);
  }

  console.log(convertedTime);
}

timeConversion("07:06:45AM");
timeConversion("12:06:45AM");
timeConversion("12:06:45PM");
