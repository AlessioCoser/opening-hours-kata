var opening = require("./config").opening;

module.exports = {
  isOpenOn,
  nextOpeningDate,
};

function nextOpeningDate(date) {
  date.setDate(date.getDate() + 1);

  if (!isOpenOn(date)) {
    return nextOpeningDate(date);
  }
  return changeTime(date, opening.from.hours, opening.from.minutes);
}

function isOpenOn(date) {
  if (isOpeningDay(date) && isOpeningTime(date)) {
    return true;
  }
  return false;
}

function isOpeningDay(date) {
  return opening.days.indexOf(date.getDay()) !== -1;
}

function isOpeningTime(date) {
  var openingTime = changeTime(date, opening.from.hours, opening.from.minutes);
  var closingTime = changeTime(date, opening.to.hours, opening.to.minutes);
  return (date.getTime() >= openingTime.getTime()) && (date.getTime() < closingTime.getTime());
}

function changeTime(date, hours, minutes) {
  var dateTime = new Date(date.getTime());
  dateTime.setUTCHours(hours);
  dateTime.setUTCMinutes(minutes);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return dateTime;
}
