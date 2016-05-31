var config = require("./config");

module.exports = {
  isOpenOn,
};

function isOpenOn(day) {
  var date = new Date(day);
  if (config.opening_days.indexOf(date.getDay()) !== -1) {
    return true;
  }
  return false;
}
