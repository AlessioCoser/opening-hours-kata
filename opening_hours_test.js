var chai = require('chai');
var expect = chai.expect;
var shop = require("./opening_hours");

const WEDNESDAY                = new Date('2016-05-11T12:22:11.824Z');
const WEDNESDAY_BEFORE_OPENING = new Date('2016-05-11T07:59:59.000Z');
const WEDNESDAY_AFTER_CLOSING  = new Date('2016-05-11T16:00:00.000Z');
const THURSDAY                 = new Date('2016-05-12T12:22:11.824Z');
const FRIDAY_AT_EIGHT          = new Date('2016-05-13T08:00:00.000Z');
const NEXT_MONDAY_AT_EIGHT     = new Date('2016-05-16T08:00:00.000Z');

describe('Is open on', function() {

  it('Shop is open on wednesday', function() {
    expect(shop.isOpenOn(WEDNESDAY)).to.eql(true);
  });

  it('Shop is not open on thursday', function() {
    expect(shop.isOpenOn(THURSDAY)).to.eql(false);
  });

  it('Shop is not open on wednesday until 7:59', function() {
    expect(shop.isOpenOn(WEDNESDAY_BEFORE_OPENING)).to.eql(false);
  });

  it('Shop is not open on wednesday from 16:00', function() {
    expect(shop.isOpenOn(WEDNESDAY_AFTER_CLOSING)).to.eql(false);
  });

});

describe('Next Opening Day', function() {

  it('On thursday is Friday 13 May 2016 at 08:00', function() {
    expect(shop.isOpenOn(THURSDAY)).to.eql(false);
    expect(shop.nextOpeningDate(THURSDAY)).to.eql(FRIDAY_AT_EIGHT);
  });

  it('On wednesday is Friday 13 May 2016 at 08:00', function() {
    expect(shop.nextOpeningDate(WEDNESDAY)).to.eql(FRIDAY_AT_EIGHT);
  });

  it('On friday is next Monday 16 May 2016 at 08:00', function() {
    expect(shop.nextOpeningDate(WEDNESDAY)).to.eql(NEXT_MONDAY_AT_EIGHT);
  });

});
