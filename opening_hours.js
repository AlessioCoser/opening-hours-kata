var config = require("./config");
var opening = config.opening;

module.exports = {
  isOpenOn,
  nextOpeningDate,
};

function nextOpeningDate(date) {
  do {
    date.setDate(date.getDate() + 1);
  }while (!isOpenOn(date))

  date.setUTCHours(opening.from.hours);
  date.setUTCMinutes(opening.from.minutes);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
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
  var openingTime = new Date(date.getTime());
  openingTime.setUTCHours(config.opening.from.hours);
  openingTime.setUTCMinutes(config.opening.from.minutes);
  return openingTime.getTime();
}

function closingTimeFor(date){
  var closingTime = new Date(date.getTime());
  closingTime.setUTCHours(config.opening.to.hours);
  closingTime.setUTCMinutes(config.opening.to.minutes);
  return closingTime.getTime();
}
