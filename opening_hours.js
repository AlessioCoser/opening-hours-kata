var config = require("./config");
var opening = config.opening;

module.exports = {
  isOpenOn,
  nextOpeningDate,
};

function nextOpeningDate(date) {
  date.setDate(date.getDate() + 1);

  if (!isOpenOn(date)) {
    return nextOpeningDate(date);
  }

  return changeTime(date, config.opening.from.hours, config.opening.from.minutes);
}

function isOpenOn(date) {
  if (opening.days.indexOf(date.getDay()) !== -1) {
    if((date.getTime() >= openingTimeFor(date)) && (date.getTime() < closingTimeFor(date))) {
      return true;
    }
  }
  return false;
}

function openingTimeFor(date){
  var dateTime = changeTime(date, config.opening.from.hours, config.opening.from.minutes);
  return dateTime.getTime();
}

function closingTimeFor(date){
  var dateTime = changeTime(date, config.opening.to.hours, config.opening.to.minutes);
  return dateTime.getTime();
}

function changeTime(date, hours, minutes) {
  var dateTime = new Date(date.getTime());
  dateTime.setUTCHours(hours);
  dateTime.setUTCMinutes(minutes);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return dateTime;
}
