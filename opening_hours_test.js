var chai = require('chai');
var expect = chai.expect;
var shop = require("./opening_hours");

const WEDNESDAY = '2016-05-11T12:22:11.824Z';

describe('Is open on', function() {
  it('Shop is open on wednesday', function() {
    expect(shop.isOpenOn(WEDNESDAY)).to.eql(true);
  });
});
