const afterTodayMessages = [
  "Hope the day went well!",
  "Today was the first of many.",
  "Hope it's not worse than the old one.",
  "New job = Great job",
  "New job > Old job"
];

const todayMessages = [
  "TODAY IS THE FIRST DAY OF YOUR NEW JOB! GOOD LUCK!",
  "It's game time for the new job!",
  "Crush that first day at the new job!",
  "Hope you're in the mood for success, because that's what's gonna happen.",
  "Be careful not to kick too much ass.",
  "New job, new day, great time!",
  "Time to grab ahold of a brand new opportunity.",
  "The next step of your career begins now.",
  "New job = Great job",
  "New job > Old job"
];

const singularMessages = [
  "day before you have to find somewhere new to park.",
  "more day with your old coworkers.",
  "day more at your old office.",
  "day before you never go back to your old job.",
  "day left of the previous chapter of your life.",
  "trip left to your old office.",
  "more conversation with your old boss.",
  "more day where you barely have to work anyway."
];

const pluralMessages = [
  "days before you have to find somewhere new to park.",
  "more days with your old coworkers.",
  "days more at your old office.",
  "days before you never go back to your old job.",
  "days left of the previous chapter of your life.",
  "trips left to your old office.",
  "more conversations with your old boss.",
  "more days where you barely have to work anyway."
];

export default function messagePicker(daysLeft) {
  let message = "";
  if (daysLeft === -1) {
    message =
      afterTodayMessages[Math.floor(Math.random() * afterTodayMessages.length)];
  } else if (daysLeft === 0) {
    message = todayMessages[Math.floor(Math.random() * todayMessages.length)];
  } else if (daysLeft === 1) {
    message =
      daysLeft +
      " " +
      singularMessages[Math.floor(Math.random() * singularMessages.length)];
  } else {
    message =
      daysLeft +
      " " +
      pluralMessages[Math.floor(Math.random() * pluralMessages.length)];
  }
  return message;
}
