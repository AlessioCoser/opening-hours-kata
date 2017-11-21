const { equal } = require('assert')
const { OpeningHours, WEEKDAYS } = require('./index')

describe('OpeningHours', () => {
  let wednesday = new Date('2016-05-11T12:22:11.824Z')
  let thursday = new Date('2016-05-12T12:22:11.824Z')

  describe('With no configuration', () => {
    it('is never open', () => {
      let openingHours = new OpeningHours(null)

      equal(false, openingHours.isOpenOn(wednesday))
      equal(false, openingHours.isOpenOn(thursday))
    })
  })

  describe('#IsOpenOn', () => {
    let openDays = [
      WEEKDAYS['monday'],
      WEEKDAYS['wednesday'],
      WEEKDAYS['friday']
    ]

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
})
