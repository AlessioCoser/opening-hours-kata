class OpeningHours {
  constructor (openDays) {
    this.openDays = openDays || []
  }

  isOpenOn (date) {
    var day = date.getDay()

    return this.openDays.some((openDay) => day === openDay)
  }
}

module.exports = OpeningHours
