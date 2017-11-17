const { equal } = require('assert')
const OpeningHours = require('./index')

const DAYS = {
  'sunday': 0,
  'monday': 1,
  'tuesday': 2,
  'wednesday': 3,
  'thursday': 4,
  'friday': 5,
  'saturday': 6
}

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
    let openDays = [DAYS['monday'], DAYS['wednesday'], DAYS['friday']]

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
