var config = require("./config");
var opening = config.opening;

module.exports = {
  isOpenOn,
};

function isOpenOn(day) {
  var date = new Date(day);
  if (opening.days.indexOf(date.getDay()) !== -1) {
    if((date.getTime() > openingTime(date)) && (date.getTime() < closingTime(date))) {
      return true;
    }
  }
  return false;
}

function openingTime(date){
  var openingTime = new Date(date.getTime());
  openingTime.setUTCHours(config.opening.from.hours);
  openingTime.setUTCMinutes(config.opening.from.minutes);
  return openingTime.getTime();
}

function closingTime(date){
  var closingTime = new Date(date.getTime());
  closingTime.setUTCHours(config.opening.to.hours);
  closingTime.setUTCMinutes(config.opening.to.minutes);
  return closingTime.getTime();
}
