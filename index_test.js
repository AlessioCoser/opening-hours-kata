const { equal, notEqual } = require('assert')
const { OpeningHours, WEEKDAYS } = require('./index')

describe('OpeningHours', () => {
  let wednesday = new Date('2016-05-11T12:22:11.824Z')
  let thursday = new Date('2016-05-12T12:22:11.824Z')
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
    let tuesday = new Date('2016-05-10T12:22:11.824Z')

    it('returns the next open date', () => {
      let openingHours = new OpeningHours(openDays)

      let nextOpeningDate = openingHours.nextOpeningDate(tuesday)

      notEqual(null, nextOpeningDate)
      equal(wednesday.getDate(), nextOpeningDate.getDate())
      equal(wednesday.getMonth(), nextOpeningDate.getMonth())
      equal(wednesday.getFullYear(), nextOpeningDate.getFullYear())
    })
  })
})
