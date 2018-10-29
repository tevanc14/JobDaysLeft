const moment = require("moment");

export default function daysLeft(date) {
  const startDate = moment();
  const endDate = date;
  return countDays(startDate, endDate);
}

function countDays(startDate, endDate) {
  let count = 0;
  let currentDate = startDate;
  while (currentDate <= endDate) {
    const dayOfWeek = currentDate.day();
    if (!(dayOfWeek === 6 || dayOfWeek === 0)) count++;
    currentDate = currentDate.add(1, "days");
  }
  return count;
}
