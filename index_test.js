const { equal } = require('assert')
const OpeningHours = require('./index')

let wednesday = '2016-05-11T12:22:11.824Z'
let thursday = '2016-05-12T12:22:11.824Z'

describe('With no configuration', () => {
  it('is never open', () => {
    let openingHours = new OpeningHours(null)

    equal(false, openingHours.isOpenOn(wednesday))
    equal(false, openingHours.isOpenOn(thursday))
  })
})
