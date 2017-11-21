const { equal, notEqual } = require('assert')
const { OpeningHours, WEEKDAYS } = require('./index')

describe('OpeningHours', () => {
  let wednesday = new Date('2016-05-11T00:00:00.000Z')
  let thursday = new Date('2016-05-12T00:00:00.000Z')
  let openDays = [
    WEEKDAYS.Monday,
    WEEKDAYS.Wednesday
  ]

  describe('With no configuration', () => {
    it('is never open', () => {
      let openingHours = new OpeningHours(null)

      equal(false, openingHours.isOpenOn(wednesday))
      equal(false, openingHours.isOpenOn(thursday))
    })

    it('has never a next opening date', () => {
      let openingHours = new OpeningHours(null)

      equal(null, openingHours.nextOpeningDate(wednesday))
    })
  })

  describe('#IsOpenOn', () => {
    it('Without day returns false', () => {
      let openingHours = new OpeningHours(openDays)

      equal(false, openingHours.isOpenOn(null))
    })

    it('correct days to check', () => {
      let openingHours = new OpeningHours(openDays)

      equal(true, openingHours.isOpenOn(wednesday))
      equal(false, openingHours.isOpenOn(thursday))
    })
  })

  describe('#nextOpeningDate', () => {
    let tuesday = new Date('2016-05-10T00:00:00.000Z')

    it('returns the next open date', () => {
      let openingHours = new OpeningHours(openDays)

      let nextOpeningDate = openingHours.nextOpeningDate(tuesday)

      notEqual(null, nextOpeningDate)
      equal(wednesday.toUTCString(), nextOpeningDate.toUTCString())
    })

    it('returns the next week open date', () => {
      let nextMonday = new Date('2016-05-16T00:00:00.000Z')
      let openingHours = new OpeningHours(openDays)

      let nextOpeningDate = openingHours.nextOpeningDate(thursday)

      notEqual(null, nextOpeningDate)
      equal(nextMonday.toUTCString(), nextOpeningDate.toUTCString())
    })
  })
})
