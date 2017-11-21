const WEEKDAYS = {
  'sunday': 0,
  'monday': 1,
  'tuesday': 2,
  'wednesday': 3,
  'thursday': 4,
  'friday': 5,
  'saturday': 6
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
}

module.exports = {
  OpeningHours,
  WEEKDAYS
}
