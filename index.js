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
    if (this.openDays.length === 0) {
      return null
    }

    let currWeekOpeningDates = this.openDays
      .map((openWeekDay) => this._setDateFrom(openWeekDay, new Date(date.getTime())))

    let nextWeekOpeningDates = currWeekOpeningDates
      .map((openDate) => this._addOneWeek(new Date(openDate.getTime())))

    let openingDates = currWeekOpeningDates.concat(nextWeekOpeningDates)
      .filter((openDate) => openDate > date)

    return openingDates[0]
  }

  _setDateFrom (weekDay, date) {
    var currentWeekDay = date.getDay()

    var diffWeekDay = weekDay - currentWeekDay

    date.setDate(date.getDate() + diffWeekDay)

    return new Date(date.getTime())
  }

  _addOneWeek (openDate) {
    let oneWeek = 7

    openDate.setDate(openDate.getDate() + oneWeek)

    return openDate
  }
}

module.exports = {
  OpeningHours,
  WEEKDAYS
}
