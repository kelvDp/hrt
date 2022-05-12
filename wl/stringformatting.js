function formatAsCustomString(date, number) {
    return padLeft(number,5) + "-" + formatDate(date);
}

function padLeft (str, max) {
  str = str.toString();
  return str.length < max ? padLeft("0" + str, max) : str.substring(str.length - 5);
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear().toString();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year.substring(2), month, day].join("");
}

let answer = formatAsCustomString('2001-1-31', 1234567890);

console.log(answer);