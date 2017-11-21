const WEEKDAYS = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
}

class OpeningHours {
  constructor (openDays) {
    this.openDays = openDays || []
  }

  isOpenOn (date) {
    if (!date) {
      return false
    }

    var day = date.getDay()

    return this.openDays.some((openDay) => day === openDay)
  }

  nextOpeningDate (date) {
    return null
  }
}

module.exports = {
  OpeningHours,
  WEEKDAYS
}
