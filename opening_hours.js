module.exports = {
  isOpenOn,
};

function isOpenOn(day) {
  var date = new Date(day);
  if ([1,3,5].indexOf(date.getDay()) !== -1) {
    return true;
  }
  return false;
}
