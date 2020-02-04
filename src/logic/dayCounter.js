const moment = require("moment");

export default function daysLeft(date) {
  const startDate = moment();
  const endDate = date;
  return countDays(startDate, endDate);
}

function countDays(startDate, endDate) {
  let dateDifference = endDate.diff(startDate, "days") + 1;
  if (startDate.hour() > 17 || startDate.hour() < 12) {
    dateDifference--;
  }
  return dateDifference;
}
