export default function daysLeft(date) {
  const startDate = new Date();
  const endDate = date;
  return countDays(startDate, endDate);
}

function countDays(startDate, endDate) {
  let count = 0;
  const curDate = startDate;
  while (curDate <= endDate) {
    const dayOfWeek = curDate.getDay();
    // Assuming one works Monday - Friday
    if (!(dayOfWeek === 6 || dayOfWeek === 0)) count++;
    curDate.setDate(curDate.getDate() + 1);
  }
  return count;
}
