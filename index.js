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

module.exports = OpeningHours
