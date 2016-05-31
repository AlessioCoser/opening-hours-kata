var config = require("./config");
var openingDays = config.openingDays;

module.exports = {
  isOpenOn,
};

function isOpenOn(day) {
  var date = new Date(day);
  if (openingDays.indexOf(date.getDay()) !== -1) {
    return true;
  }
  return false;
}
